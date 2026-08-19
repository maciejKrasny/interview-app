import { StyledButton } from "./SegmentButton.styled";

interface SegmentButtonProps {
    active: string;
    segments: string[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SegmentButton: React.FC<SegmentButtonProps> = ({ onClick, segments, active }) => {

    return (
        <div>
            {segments.map((segment) => <StyledButton key={segment} $active={active === segment} value={segment} onClick={onClick}>{segment}</StyledButton>)}
        </div>
    )
}

export default SegmentButton;