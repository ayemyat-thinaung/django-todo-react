import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store/store";
import TodoPage from "../pages/TodoPage";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={TodoPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
