import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './styles.css';

const List = () => <h1>List</h1>

const Add = () => <h1>Add</h1>


function Viws() {
    return (
   
        <Switch>
            <Route path='/list'>
                <List />
            </Route>

            <Route path='/add'>
                <Add />
            </Route>

        <div className="div-button">
            <button className="button">
                <Link to='/list' className="link-button">
                    List
                </Link>
            </button>
            <button className="button">
                <Link to='/add' className="link-button">
                    Add
                </Link>
            </button>
        </div>

        </Switch>

    );
  }
  
  export default Viws;