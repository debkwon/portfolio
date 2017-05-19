import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Work from './Work';
import About from './About';
import Project from './Project';
import Data from './Data';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';

ReactDOM.render(

  <BrowserRouter>
    <div>
      <App />
      <Redirect from="/" to="/work" />
      <Switch>
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/pioneers-of-mars" component={ props => <Project {...props} project={Data.pioneers} />} />
        <Route path="/selleb" component={props => <Project {...props} project={Data.selleb} />} />
        <Route path="/occuther" component={props => <Project {...props} project={Data.occuther} />} />
        <Route path="/rando" component={props => <Project {...props} project={Data.rando} />} />
        <Route path="/upcoming" component={props => <Project {...props} project={Data.upcoming} />} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
