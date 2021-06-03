import "./App.css";
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";


const User = lazy(() => import("./pages/User"));
const Users = lazy(() => import("./pages/Users"));

function App() {
  return (
    <div className="">
      <Router>
        <Suspense
          fallback={
            <div className="routes-loader">
              <Loader type="TailSpin" color="#cacaca" height={50} width={50} />
            </div>
          }
        >
          <Switch>
            <Route path="/" component={Users} exact />
            <Route path="/user/:id" component={User} exact />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
