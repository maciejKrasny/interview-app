import { useLocation, useNavigate } from "react-router-dom";
import AddCircleIcon from "../Icons/AddCircleIcon";
import BackIcon from "../Icons/BackIcon";

const useMenuProps = () => {
    const { pathname, key } = useLocation();
    const navigate = useNavigate();

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
            title: 'NestJS',
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