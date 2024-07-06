import Button from "#//components/Button/Button";
import Input from "#//components/Input/Input";
import RichTextEditor from "#//components/RichTextEditor/RichTextEditor";
import Typography from "#//components/Typography";
import withMenu from "#//utils/withMenu.hoc";
import { ChangeEventHandler, useMemo, useReducer } from "react";
import { Container, StyledForm } from "./QuestionPage.styled";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_QUESTION } from "#//api/mutations/addQuestion";
import { useNavigate } from "react-router-dom";
import Select, { SelectOption, SelectOptionProps } from "#//components/Select/Select";
import { GET_CATEGORIES, GET_CATEGORIES_DATA } from "#//api/queries/getCategories";
import Loader from "#//components/Loader/Loader";

interface IFormValue {
    questionPl: string;
    questionEn: string;
    answerPl?: string;
    answerEn?: string;
    categoryId?: string;
}

enum ActionType {
    CHANGE_QUESTION_PL,
    CHANGE_QUESTION_EN,
    CHANGE_ANSWER_PL,
    CHANGE_ANSWER_EN,
    CHANGE_CATEGORY,
}

interface IBaseAction {
    type: ActionType;
    payload: string;
}


type IAction = IBaseAction;

function reducer(state: IFormValue, action: IAction) {
    const { payload, type } = action;
    switch (type) {
        case ActionType.CHANGE_QUESTION_PL: {
            return {
                ...state,
                questionPl: payload,
            }
        }
        case ActionType.CHANGE_QUESTION_EN: {
            return {
                ...state,
                questionEn: payload,
            }
        }
        case ActionType.CHANGE_ANSWER_PL: {
            return {
                ...state,
                answerPl: payload,
            }
        }
        case ActionType.CHANGE_ANSWER_EN: {
            return {
                ...state,
                answerEn: payload,
            }
        }
        case ActionType.CHANGE_CATEGORY: {
            return {
                ...state,
                categoryId: payload,
            }
        }
        default: {
            return state;
        }
    }
}

const QuestionPage: React.FC = () => {
    const { loading, data } = useQuery<GET_CATEGORIES_DATA>(GET_CATEGORIES);
    const [addQuestion] = useMutation(ADD_QUESTION)
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, {
        questionEn: '',
        questionPl: '',
        categoryId: '',
        answerPl: '',
        answerEn: ''
    })

    const handleOnChangeQuestionPl: ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({ type: ActionType.CHANGE_QUESTION_PL, payload: event.target.value });
    }

    const handleOnChangeQuestionEn: ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({ type: ActionType.CHANGE_QUESTION_EN, payload: event.target.value });
    }

    const handleOnChangeAnswerPl = (text: string) => {
        dispatch({ type: ActionType.CHANGE_ANSWER_PL, payload: text });
    }

    const handleOnChangeAnswerEn = (text: string) => {
        dispatch({ type: ActionType.CHANGE_ANSWER_EN, payload: text });
    }

    const handleOnSubmit = async (event: any) => {
        event.preventDefault();
        const a = {
            categoryId: state.categoryId,
            textPolish: state.questionPl,
            textEnglish: state.questionEn,
            answerPolish: state.answerPl,
            answerEnglish: state.answerEn
        };

        await addQuestion({
            variables: {
                createQuestionDto: a,
            }
        });

        navigate(`/${state.categoryId}`);

    }

    const handleOnSelect = (option: string) => {
        dispatch({ type: ActionType.CHANGE_CATEGORY, payload: option });
    }

    const selectData = useMemo(() => {
        if (!data?.categories.length) {
            return [];
        }
        return data?.categories.map(({ id, name }) => (
            <SelectOption label={name} value={id} />
        ))
    }, [data?.categories])

    if (loading) {
        return (
            <Container>
                <Loader />
            </Container>
        )
    }

    return (
        <Container>
            <Typography $variant="h1">Dodaj pytanie</Typography>
            <Select onSelect={handleOnSelect}>
                {selectData}
            </Select>
            <StyledForm>
                <Input onChange={handleOnChangeQuestionPl} value={state.questionPl} label="Pytanie po polsku" />
                <Input onChange={handleOnChangeQuestionEn} value={state.questionEn} label="Pytanie po angielsku" />
                <div>
                    <RichTextEditor
                        label="Odpowiedź po polsku"
                        value={state.answerPl}
                        onChange={handleOnChangeAnswerPl}
                    />
                </div>
                <div>
                    <RichTextEditor
                        label="Odpowiedź po angielsku"
                        value={state.answerEn}
                        onChange={handleOnChangeAnswerEn}
                    />
                </div>
                <Button type="submit" onClick={handleOnSubmit}>Zapisz</Button>
            </StyledForm>
        </Container>
    )
}

export default withMenu(QuestionPage);