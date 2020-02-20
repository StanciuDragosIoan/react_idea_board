import React from 'react';
import './index.css';

import IdeaBoard from './components/idea/IdeaBoard';
import IdeaItem from './components/idea/IdeaItem';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <IdeaBoard/>
        <IdeaItem/>
   
    </div>
  );
}

export default App;
