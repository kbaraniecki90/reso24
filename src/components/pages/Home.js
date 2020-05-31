import React from "react";

import { GetStudents } from '../functions/getStudents/getStudents'


class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Lista podopiecznych:</h1>
                <GetStudents view='list'/>
            </>
        );
    }
}

export { Home }