/**
 *
 */
export default function ConferenceView ({ conferenceId }) {
    return (<><h1>{conferenceId}</h1></>)
};

ConferenceView.getInitialProps = (context) => {
    return { conferenceId: context.query.conferenceId };
}

ConferenceView.headerTitle = 'Konferenzen';
