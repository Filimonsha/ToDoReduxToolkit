import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { createStore,applyMiddleware } from 'redux';
import {Provider, useDispatch, useStore} from 'react-redux'
import { composeWithDevTools } from "@redux-devtools/extension";
import ToDoList from './components/ToDoList';
import {addToDoItem} from './store/toDoSlice'
import { Layout } from './components/main/Layout';
import GlobalStyles from './global'
function App() {
  // const [data,setData] = useState([{}])
  const [value,setValue] = useState("")
  const dispatch = useDispatch(); 
  return (
    <>
      <div className="App">
        <div className="header">
          <h1>ToDo App</h1>
          <div className="App_wrap">
            <input
              type="text"
              value={value}
              className="App_input"
              placeholder="Введите дело"
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => {
                if (value.length != 0) dispatch(addToDoItem({ name: value }));
              }}
            >
              Добавить дело
            </button>
            <ToDoList />
          </div>
        </div>
        {/* <Layout></Layout> */}
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
