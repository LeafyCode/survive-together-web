import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { CreateDistributor } from "./containers/CreateDistributor";
import { AppLayout } from "./components/app/AppLayout";
import { CreateRequest } from "./containers/CreateRequest";
import { TermsAndConditions } from "./containers/TermsAndConditions";
import { PrivacyPolicySinhala } from "./components/privacyPolicyLanguges/PrivacyPolicySinhala";
import { PrivacyPolicyEnglish } from "./components/privacyPolicyLanguges/PrivacyPolicyEnglish";

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
              <PrivacyPolicySinhala/>
            </Route>
            <Route path="/privacySinhala">
              <PrivacyPolicySinhala/>
            </Route>
            <Route path="/privacyEnglish">
              < PrivacyPolicyEnglish />
            </Route>
            <Route path="/terms">
              <TermsAndConditions />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
