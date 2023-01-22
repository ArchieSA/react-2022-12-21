import styles from './styles.module.css';
import {selectUserById} from "../../store/modules/user/selectors";
import {useSelector} from "react-redux";
import classnames from "classnames";

export const User = ({userId, className = ''}) => {
    const user = useSelector((state) => selectUserById(state, {userId}))
    return (
        <div className={classnames(styles.root, className)}>
            <div>{user.name}</div>
        </div>
    );
};
