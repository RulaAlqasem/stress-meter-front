import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../App';
import User from './User';

import io from 'socket.io-client';
import Navbarnav from './Navbarnav';

const socket = io('https://testiiing-server.herokuapp.com', { transports: ['websocket'] });
function Main(props) {
  return (
    <>
      <Navbarnav />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} socket={socket} />} />
        <Route path="/users" render={(props) => <User {...props} socket={socket} />} />

        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </>
  );
}

export default Main;