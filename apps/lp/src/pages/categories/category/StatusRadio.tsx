import DoneIcon from "#//components/Icons/DoneIcon";
import PartIcon from "#//components/Icons/PartIcon";
import TodoIcon from "#//components/Icons/TodoIcon";
import { LearningStatus } from "#//models/Question"
import { theme } from "#//styles/theme/theme";
import { Status, StatusesContainer } from "./CategoryPage.styled";

interface StatusRadioProps {
    active: LearningStatus;
    onClick: (status: LearningStatus) => void;
}

interface StatusParams {
    color: string;
    icon: React.ReactElement;
    label: string;
}

const statusMap: Record<LearningStatus, StatusParams> = {
    [LearningStatus.TODO]: {
        color: theme.colors.light.secondary,
        icon: <TodoIcon />,
        label: 'Todo',
    },
    [LearningStatus.PART]: {
        color: theme.colors.light.accent,
        icon: <PartIcon />,
        label: 'In Progress',
    },
    [LearningStatus.DONE]: {
        color: theme.colors.light.success,
        icon: <DoneIcon />,
        label: 'Done',
    },
}

const StatusRadio: React.FC<StatusRadioProps> = ({ active, onClick }) => {
    const { color } = statusMap[active];

    return (
        <StatusesContainer>
            {Object.entries(statusMap).map(([key, value]) =>
                <Status key={key} onClick={() => onClick(key as LearningStatus)} $color={key === active ? color : undefined} >{value.label}{value.icon}</Status>
            )}
        </StatusesContainer>
    )
}

export default StatusRadio;