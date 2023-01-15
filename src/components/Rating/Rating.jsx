import styles from './styles.module.css';

import {ReactComponent as Star} from './img/star.svg';
import classnames from 'classnames';
import {Size} from "../../constants/ui";

export const Rating = ({onChange, value, size = Size.l, className}) => {

    return (
        <div className={className}>
            {[...Array(5)].map((_, index) => (
                <Star className={
                    classnames(
                        styles[size],
                        {[styles.active]: index + 1 <= value})}
                      onClick={onChange ? () => onChange(index + 1) : null}
                />
            ))}
        </div>
    )
};
