import { TeamMember, StylingTest } from '../components/TeamMember';
import { withTeamMember } from '../hoc/withTeamMember';
import Head from 'next/head';

function Dashbord ({
    teamMembers,
    updateTeamMembers,
}) {
    return (
        <>
            <Head>
                <title>HAHAAHHAH</title>
            </Head>
            <h1>DASHBOARD</h1>
            {teamMembers.map(t => <TeamMember key={t.id} name={t.name} />)}
            <br />
            <button onClick={updateTeamMembers}>+</button>
            <Head>
                <title>8765372487</title>
            </Head>
            <hr />
            <StylingTest />
        </>
    )
};


export default withTeamMember(Dashbord);