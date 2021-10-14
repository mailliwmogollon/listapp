import React from 'react';
import { Switch, Route } from 'react-router';
import { AddPage } from '../../page/AddPage';
import { ListPage } from '../../page/ListPage';
import { Welcome } from '../../page/Welcome';


export function AppRouting() {
    return (
    
        <Switch>
            <Route path="/listpage">
                <ListPage />
            </Route>
            <Route path="/addpage">
                <AddPage />
            </Route>
            <Route path="/">
                <Welcome />
            </Route>
        </Switch>

    );
  }