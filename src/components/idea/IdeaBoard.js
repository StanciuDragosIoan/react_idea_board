import React, { useState }  from 'react'

const IdeaBoard = () => {

    const [idea, setIdea] = useState(0);
    
    return (
        <div className="card idea-board mx-3">
            Idea Board Component 

            <p>You Added {idea} ideas</p>
            <button className="idea-btn btn-dark" onClick={() => setIdea(idea + 1)}>
                Click me
            </button>
        </div>
    )
}

export default IdeaBoard;
