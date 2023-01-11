import { Button } from "../Button/Button";
export const Tab = ({name, index, onClick}) => {
    return (
        <div>
            <Button onClick={() => onClick(index)}>{name}</Button>
        </div>
    );
};
