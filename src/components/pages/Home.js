import React from "react";

import { GetStudents } from '../functions/getStudents'


class Home extends React.Component {
    render() {
        return (
            <>
                <GetStudents view='list'/>
                <button id="moreList">Zobacz więcej</button>
            </>
        )
    }
}

export { Home }