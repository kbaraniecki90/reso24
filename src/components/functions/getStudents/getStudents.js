import React, { useState } from 'react';
const requestGetStudents = new Request('data.json');

class GetStudents extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: true,
            students: (window.dateStudents)? window.dateStudents : null
        }
        this.haveStudents()
    }

    clearLoading() {
        // nie wiem jak użyć tutaj setState(). nie zmikenia statnu.

        // eslint-disable-next-line
        this.state.loading = false;
    }

    haveStudents = () => (!window.dateStudents)? this.getStudents() : this.clearLoading()

    getStudents = () => {
        // pobieranie danych
        fetch(requestGetStudents)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                students: data,
                loading: false
            })

        // Przypisanie do globalnej zminnej.
        // Zrobione tak by nie pobieraćwielo krątnie tego samego
        // Czy te rozwiązanie jest dobre?
        window.dateStudents = this.state.students

        })
    }


    render() {
        return (
            <section>
                { this.state.loading && <div>Ładowanie...</div>}
                { !this.state.loading && <ListStudents osoby={(window.dateStudents)? window.dateStudents : this.state.students} /> }
            </section>
        )
    };

}

class ListStudents extends React.Component {
    render() {
        return (
            <section className="liststudents">
                {this.props.osoby.map( val =>
                    <div key={val.id} className="student">
                        <div className="row mb-1">
                            <div className="col-auto student__image">
                                <img src={val.avatar} title="" alt="" className="img-fluid" />
                            </div>
                            <div className="col d-flex align-items-center">
                                <h2 className="mb-0">{val.first_name} {val.last_name} <small>GR:&nbsp;1</small></h2>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <button className="material-icons">add</button>
                            </div>
                        </div>
                        <p className="col-12?">Oc. miesięczna: <span className="color-ranking--3">Poprawna</span> <small>(22.11.2020)</small></p>
                        <p className="col-12?">Oc. tygodniowa: <span className="color-ranking--5">B. dobra</span> <small>(22.11.2020)</small></p>
                    </div>
                )}
            </section>
        )
    }
}


export { GetStudents }