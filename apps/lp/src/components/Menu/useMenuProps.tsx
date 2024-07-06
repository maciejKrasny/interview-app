import { useLocation, useNavigate, useParams } from "react-router-dom";
import AddCircleIcon from "../Icons/AddCircleIcon";
import BackIcon from "../Icons/BackIcon";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY, GET_CATEGORY_DATA } from "#//api/queries/getCategory";

const useMenuProps = () => {
    const { pathname, key } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();

    const { data } = useQuery<GET_CATEGORY_DATA>(GET_CATEGORY, {
        variables: {
            id,
        }
    });



    const buildPropsObject = () => {
        if (pathname === '/') {
            return {
                title: 'Interview',
                backIcon: null,
                addIcon: <AddCircleIcon onClick={() => navigateAddQuestion()} />

            }
        }

        if (pathname === '/question/add') {
            return {
                title: 'Dodaj',
                backIcon: <BackIcon onClick={() => navigateBack()} />,
                addIcon: null

            }
        }

        return {
            title: data?.category.name,
            backIcon: <BackIcon onClick={() => navigateBack()} />,
            addIcon: <AddCircleIcon onClick={() => navigateAddQuestion()} />
        }
    }

    const navigateBack = () => {
        if (key !== 'default') {
            navigate(-1);
            return;
        }

        navigate('/');
    }

    const navigateAddQuestion = () => {
        navigate('/question/add');
    }

    return buildPropsObject();
}

export default useMenuProps;