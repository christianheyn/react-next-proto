import classnames from 'classnames';
import styles from './TeamMember.module.css';

export const TeamMember = ({ name, loading }) => {
    return (
        <div className={classnames({
            "TESTSTTT": true,
            [styles.TeamMember]: true,
            [styles.TeamMemberLoading]: loading
        })}>
            {name}
        </div>
    );
};

export const StylingTest = () =>  {
    return <div className={styles.TeamMember}>StylingTest</div>
}