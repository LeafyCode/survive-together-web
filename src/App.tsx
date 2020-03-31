import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { CreateDistributor } from "./containers/CreateDistributor";
import { Distributors } from "./containers/Distributors";
import { AppLayout } from "./components/app/AppLayout";
import { Districts } from "./containers/Districts";

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/distributor/create">
              <CreateDistributor />
            </Route>

            <Route path="/distributors">
              <Distributors />
            </Route>

            <Route path="/districts">
              <Districts />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
