import React, { useEffect, useState } from 'react';
import useSWR, { mutate } from 'swr';

const fetcher = url => fetch(url)
    .then(r => r.json())
    .then(data => data.teamMembers);

export const withTeamMember = (Component) => (props) => {
    const { data: teamMembers, error } = useSWR('/api/team-member', fetcher);

    const updateTeamMembers = () => {
        mutate('/api/team-member', [...teamMembers, { id: 'new', name: 'Christian' } ], false)
    }

    return (
        <Component
            {...props}
            teamMembersLoading={!teamMembers}
            teamMembers={teamMembers || []}
            updateTeamMembers={updateTeamMembers}
        />
    );
};
