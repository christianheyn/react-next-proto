import Head from 'next/head'
import { useEffect, useState } from 'react'
import { TeamMember } from '../components/TeamMember';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [teamMembers, setTeamMembers] = useState([]);

    const fetchTeamMembers = () => {
        fetch('http://localhost:3000/api/team-member', {
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            method: 'GET',
            // body: JSON.stringify({ id: 'pdituwecdu', name: 'Christian' }),
        })
            .then(res => res.json())
            .then(data => setTeamMembers(data.teamMembers))
    }

    useEffect(fetchTeamMembers, []);

    return (
        <>
            <h1>Hi!</h1>
            {
                teamMembers.length === 0
                && [{}, {}, {}].map(t => <TeamMember id={t.id} name={t.name} loading />)
            }
            {teamMembers.map(t => <TeamMember id={t.id} name={t.name} />)}
        </>

    )
}
