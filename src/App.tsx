import React from 'react';
import './App.css';
import WordleGame from './components/WordleGame';

const App: React.FC = () => {
    return (
        <div className="App">
            <WordleGame />
        </div>
    );
};

export default App;
