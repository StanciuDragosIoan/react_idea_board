import React, { Component } from 'react'

class IdeaItem extends Component {
    constructor(){

        super();

        this.state = {
            id: '1',
            title: 'idea title',
            body: 'idea body',
            category: 'improvement'  //improvement, positive feedback, to do, pending/blocked
        };
    }

    render() {

      
        return (
            <div className="card text-center">
                <h3>Idea: {this.state.id}</h3>
                <h4>Title: {this.state.title}</h4>
                <p></p>
            </div>
        )
    }
}

export default IdeaItem;
