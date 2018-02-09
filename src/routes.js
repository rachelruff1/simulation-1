import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App.js';
import Bins from './components/Buttons/Bins';
import Create from './components/Shelves/components/Create';
import Filled from './components/Shelves/components/Filled';

export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/bins/:id' component={Bins} />
        <Route path='/bin/:id' component={Filled}/>
        <Route path='/create/:id' component={Create} />
    </Switch>
)