import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from "./components/todolist";
import TodoForm from './components/todoform';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <div className="container">
        
            <TodoList />

        </div>
    </div>
)
