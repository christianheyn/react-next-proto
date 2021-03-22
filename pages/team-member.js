import { compose } from 'ramda';
import Link from 'next/link';
import { TeamMember } from '../components/TeamMember';
import { withTeamMember } from '../hoc/withTeamMember';
import { withUhrzeit } from '../hoc/withUhrzeit';
import { withAuth } from '../hoc/withAuth';

function TeamMemberView ({
    teamMembers,
    updateTeamMembers,
    teamMembersLoading,
    uhrzeit,
}) {
    return (
        <>
            <h1>TEAM MEMBERS</h1>
            <h2>{uhrzeit}</h2>
            <Link href="/dashboard"><a>Zum Dashboard</a></Link>
            <br />
            {
                teamMembersLoading
                && <>
                    <TeamMember loading />
                    <TeamMember loading />
                    <TeamMember loading />
                    </>
            }
            {teamMembers.map(t => <TeamMember key={t.id} name={t.name} />)}
            <br />
            <button onClick={updateTeamMembers}>+</button>
        </>
    )
};

export default compose(
    withTeamMember,
    withUhrzeit,
    withAuth,
)(TeamMemberView);


