import React from "react";

import { GetStudents } from '../functions/getStudents/getStudents'


class Home extends React.Component {
    render() {
        return (
            <>
                <input className="w-100 mb-1" type="text" placeholder="Szukaj podopiecznego" id="searchStudent"/>
                <h1>Lista podopiecznych:</h1>
                <GetStudents view='list'/>
            </>
        );
    }
}

export { Home }