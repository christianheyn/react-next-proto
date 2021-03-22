import { TeamMember } from '../components/TeamMember';
import { withTeamMember } from '../hoc/withTeamMember';

function Dashbord ({
    teamMembers,
    updateTeamMembers,
}) {
    return (
        <>
            <h1>DASHBOARD</h1>
            {teamMembers.map(t => <TeamMember key={t.id} name={t.name} />)}
            <br />
            <button onClick={updateTeamMembers}>+</button>
        </>
    )
};


export default withTeamMember(Dashbord);