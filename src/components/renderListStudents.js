import React from 'react';

import { Button } from './Button'
import { Modal } from './Modal'
import { Student } from './Student'

class RenderListStudents extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page: 1,
            target: null,
            list: this.props.osoby.slice(0, 5),
            query: '',
            search: false,
            filterStudent: false
        }

        document.addEventListener('scroll', () => {this.watchWindow()})
        this.loadMore = this.loadMore.bind(this)

    }

    watchWindow() { return ((window.pageYOffset + window.outerHeight) >= (document.body.offsetHeight - 100))?  this.loadMore() : null }
    loadMore = () => {
        var page = this.state.page + 1
        this.setState({
            page: page,
            list: this.props.osoby.slice(0, page * 5),
            modalOpen: false,
        })
    }

    openModal(target) {
        this.setState({
            target: target,
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    filterStudent = (event) => {

        event.persist()

        clearTimeout(this.getFilter)
        this.getFilter = setTimeout(() => {
            let query = event.target.value.toLowerCase()
            this.setState({
                query: query,
                filterStudent: this.state.list.filter((student) =>
                student.first_name.toLowerCase().includes(query) ||
                student.last_name.toLowerCase().includes(query)
                )
            })
        }, 200);
    }

    render() {
        var list = (this.state.query.length !== 0)? this.state.filterStudent : this.state.list
        return(
            <>
            <StudentSearch list={this.state.list} fn={this.filterStudent}></StudentSearch>
            <h1>Lista podopiecznych:</h1>
            <section className="liststudents">
                {list.map( data =>
                    <Student data={data} key={data.id}>
                        {/* <Button idStudent={data.id} TestModal={Modal}/> */}
                        <Button className="material-icons" icon="add" clickFunction={() => this.openModal(data)} />
                    </Student>
                )}
                <Modal target={this.state.target} open={this.state.modalOpen}>
                    <Button clickFunction={this.closeModal} icon="clear"/>
                </Modal>
            </section>
            </>
        )
    }
}

export  { RenderListStudents }

const StudentSearch = (props) =>{
    return (
        <div className="mb-1">
            <div className="searchStudent">
                <input className="w-100" type="text" placeholder="Szukaj podopiecznego" onChange={props.fn}/>
                <span className="material-icons searchStudent__icon">search</span>
            </div>
        </div>
    )
}
