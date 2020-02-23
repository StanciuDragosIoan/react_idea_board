import React, { Component } from 'react';
import IdeaItem from './IdeaItem';
import AddIdea from './AddIdea';

class IdeaBoard extends Component {

    constructor(){

        super();

        this.state = {
            ideas : [
                {
                    id: '1',
                    title: 'idea title',
                    body: 'idea body',
                    category: 'improvement'  //improvement, positive feedback, to do, pending/blocked
                },

                {
                    id: '2',
                    title: 'idea title2',
                    body: 'idea2 body',
                    category: 'blocked'  //improvement, positive feedback, to do, pending/blocked
                },

                {
                    id: '3',
                    title: 'idea title3',
                    body: 'idea3 body',
                    category: 'positive feedback'  //improvement, positive feedback, to do, pending/blocked
                },

                {
                    id: '4',
                    title: 'idea title4',
                    body: 'idea4 body',
                    category: 'to do'  //improvement, positive feedback, to do, pending/blocked
                },

                {
                    id: '5',
                    title: 'idea title5',
                    body: 'idea5 body',
                    category: 'to do'  //improvement, positive feedback, to do, pending/blocked
                },
 
                
            ],
            
        };
    }

   
    addnewIdea = () => {
        console.log('test');
    }

    render() {

        const { ideas } = this.state;

        return (
            <div className="idea-board">
                <button 
                    className="btn btn-dark m-5"
                    onClick={this.addnewIdea}
                >
                        Add new Idea
                    </button>
                <h1 className="text-center">Idea Board Component</h1>
                <div className="row py-3 m-3">

                    {ideas.map((idea, id) => { return(<IdeaItem 
                                                        title={idea.title}
                                                        body={idea.body}
                                                        category={idea.category}
                                                        key={idea.id}
                                                    />) } )}

                </div>
                <AddIdea/> 
             </div>
        )
    }
}

export default IdeaBoard;
