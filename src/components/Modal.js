import React from 'react';

const Modal = (props) => {
    const targetStudent = props.target
    return (props.open)?
        <aside className="modal">
            <div className="row p-2 modal__header">
                <div className="col-auto">
                    <img src={targetStudent.avatar} alt=""/>
                </div>
                <header className="col d-flex flex-column align-items-center justify-content-center">
                    <h3 className="h2 py-2">{targetStudent.first_name} {targetStudent.last_name}</h3>
                    <small>GR: {targetStudent.group}</small>
                </header>
                <div className="col-3 modal__exit">
                    {props.children}
                </div>
                <div className="col-12 mt-2">
                    <h4 className="h3">Informacje:</h4>
                    <p className="col-12?">Oc. miesięczna: <span className="color-ranking--3">Poprawna</span> <small>(22.11.2020)</small></p>
                    <p className="col-12?">Oc. tygodniowa: <span className="color-ranking--5">B. dobra</span> <small>(22.11.2020)</small></p>
                </div>
            </div>
            <div className="modal__body">
                <table className="table-pkt">
                    <thead>
                        <tr>
                            <th>Pkt:</th>
                            <th>Opis:</th>
                            {/* <th>Kto:</th> Przygotowane do wyświetlenia osoby kto wystawił */}
                        </tr>
                    </thead>
                    <tbody>
                        {targetStudent.pkts.map( pkt => {return (
                            <tr key={pkt.idPkt}>
                                <td className="table-pkt__pkt">
                                    {(pkt.pkt > 0)? "+" + pkt.pkt : pkt.pkt}
                                </td>
                                <td>{pkt.decription}</td>
                                {/* <td>{pkt.who}</td> Przygotowane do wyświetlenia osoby kto wystawił */}
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </aside>
    : null
}

export { Modal }