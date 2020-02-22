import React, { Component } from 'react';

class IdeaItem extends Component {
    render(props) {
        return (
            <div className="card text-center col-sm-12 col-md-3">
                <h3>{this.props.title}</h3>
                <h4>{this.props.body}</h4>
                <p>{this.props.category}</p>
            </div>
        )
    }
}

export default IdeaItem;
