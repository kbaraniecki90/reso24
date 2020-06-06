import React from 'react';

const Student = (props) => {
    const data = props.data;
    return (
        <div key={data.id} className="student">
            <div className="row mb-1">
                <div className="col-auto student__image">
                    <img src={data.avatar} title="" alt="" className="img-fluid" />
                </div>
                <div className="col d-flex align-items-center">
                    <h2 className="mb-0">{data.first_name} {data.last_name} <small>GR:&nbsp;{data.group}</small></h2>
                </div>
                <div className="col-auto d-flex align-items-center">
                    {props.children}
                </div>
            </div>
            <p className="col-12?">Oc. miesięczna: <span className="color-ranking--3">Poprawna</span> <small>(22.11.2020)</small></p>
            <p className="col-12?">Oc. tygodniowa: <span className="color-ranking--5">B. dobra</span> <small>(22.11.2020)</small></p>
        </div>
    )
}

export { Student }