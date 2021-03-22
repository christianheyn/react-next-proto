import classnames from 'classnames';
import styles from './TeamMember.module.css';

export const TeamMember = ({ name, loading }) => {
    return <div className={classnames({
        [styles.TeamMember]: true,
        [styles.TeamMemberLoading]: loading
    })}>{name}</div>
};
