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
            list: this.props.osoby.slice(0, 5)
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
            modalOpen: false
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

    render() {
        return(
            <section className="liststudents">
                {this.state.list.map( data =>
                    <Student data={data} key={data.id}>
                        {/* <Button idStudent={data.id} TestModal={Modal}/> */}
                        <Button className="material-icons" icon="add" clickFunction={() => this.openModal(data)} />
                    </Student>
                )}
                <Modal target={this.state.target} open={this.state.modalOpen}>
                    <Button clickFunction={this.closeModal} icon="clear"/>
                </Modal>
            </section>
        )
    }
}

export  { RenderListStudents }

