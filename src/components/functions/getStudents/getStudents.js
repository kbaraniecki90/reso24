import React from 'react';
const requestGetStudents = new Request('data.json');

class GetStudents extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: true,
            students: null
        }
        this.haveStudents()
    }

    clearLoading() {
        console.log('tu')
        this.setState({loading: false});
    }

    haveStudents = () => {
        // sprawdzam czy było już pobrane
        if(!window.dateStudents){
            console.log('pobieram')
            this.getStudents()
        } else {
            console.log('posiadam juz baze danych', window.dateStudents)
            this.clearLoading()
        }
    }

    getStudents = () => {
        // pobieranie danych
        fetch(requestGetStudents)
        .then(response => response.json())
        .then((data) => {this.setState({
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
                { !this.state.loading && <ListStudents osoby={(this.state.students === undefined)? window.dateStudents : this.state.students} /> }
            </section>
        )
    };

}

class ListStudents extends React.Component {
    render() {
        return (
            <>
                {this.props.osoby.map( val =>
                    <div key={val.id} >
                        <div className="row">
                            <div className="col-2">
                                <img src={val.avatar} title="" alt="" className="img-fluid" />
                            </div>
                            <div className="col">
                                <h3 className="mb-0">{val.first_name} {val.last_name}</h3>
                                <p className="my-0"><small>GR: 1</small></p>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <button>+</button>
                            </div>
                        </div>
                        <div className="row">
                            <p className="col-6">Ocena miesięczna: <span className="d-block">Poprawna</span></p>
                            <p className="col-6">Ocena tygodniowa: <span className="d-block">B. dobra</span></p>
                        </div>
                    </div>
                )}
            </>
        )
    }
}


export { GetStudents }