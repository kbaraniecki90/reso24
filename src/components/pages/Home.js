import React from "react";

import { GetStudents } from '../functions/getStudents/getStudents'


class Home extends React.Component {
    render() {
        return (
            <>
                <div className="mb-1">
                    <div className="searchStudent">
                        <input className="w-100" type="text" placeholder="Szukaj podopiecznego"/>
                        <span class="material-icons searchStudent__icon">search</span>
                    </div>
                </div>
                <h1>Lista podopiecznych:</h1>
                <GetStudents view='list'/>
            </>
        );
    }
}

export { Home }