import React from 'react';
import { RenderListStudents } from '../renderListStudents';
const requestGetStudents = new Request('data.json');

class GetStudents extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: true,
            students: null
        }

    }

    getStudents() {
        fetch(requestGetStudents)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                students: data,
                loading: false
            })
        })
        .catch(err => {console.error('ERROR in "getStudents"')})
    }

    render = () => {
        if(!this.state.students){ this.getStudents()}
        return (
            <section>
                { this.state.loading && <div>Ładowanie...</div>}
                { !this.state.loading && <RenderListStudents osoby={this.state.students} /> }
            </section>
        )
    };

}

export { GetStudents }