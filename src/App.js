import React from 'react';
import './index.css';

import IdeaBoard from './components/idea/IdeaBoard';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <IdeaBoard/>
 
   
    </div>
  );
}

export default App;
