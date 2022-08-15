import React from 'react';
import TodoApp from './TodoApp';

import './styles.css';
import Header from './header/Header';

function App() {
  return (
    <div className="app-wrapper">
        <div className="container">
            <Header/>
            <TodoApp/>
        </div>

    </div>
  );
}

export default App;