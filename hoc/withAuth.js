export const withAuth = (C) => (props) => {
    const binIchAuth = true;

    if (binIchAuth) {
        return <C {...props} />
    }

    return 'MEine Login Form';
};
