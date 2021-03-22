// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const initialTeamMembers = [
    { id: '1', name: 'Nathalie' },
    { id: '2', name: 'Lisett' },
    { id: '3', name: 'Tim' },
    { id: '4', name: 'Robert' },
    { id: '5', name: 'Paul' },
];

export default async (req, res) => {
    const {
        method,
        body,
    } = req;

    switch(method) {
        case 'POST':
            await new Promise(resolve => setTimeout(resolve, 2000));
            res.status(200).json({ teamMembers: [...initialTeamMembers, body] });
            return null;


        default:
            await new Promise(resolve => setTimeout(resolve, 1000));
            res.status(200).json({ teamMembers: initialTeamMembers })
    }

};
