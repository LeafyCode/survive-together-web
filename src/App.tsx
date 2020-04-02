import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { CreateDistributor } from "./containers/CreateDistributor";
import { Distributors } from "./containers/Distributors";
import { AppLayout } from "./components/app/AppLayout";
import { CreateRequest } from "./containers/CreateRequest";
import { TermsAndConditions } from "./containers/TermsAndConditions";
import { Districts } from "./containers/Districts";
import { Requests } from "./containers/Requests";
import { AboutUs } from "./containers/AboutUs";
import { ContactUs } from "./containers/ContactUs";
import { PrivacyPolicy } from "./containers/PrivacyPolicy";

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
            <Route path="/request/create">
              <CreateRequest />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/terms">
              <TermsAndConditions />
            </Route>

            <Route path="/requests">
              <Requests />
            </Route>

            <Route path="/distributors">
              <Distributors />
            </Route>

            <Route path="/districts">
              <Districts />
            </Route>

            <Route path="/about">
              <AboutUs />
            </Route>

            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
