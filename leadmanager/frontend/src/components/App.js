import React, { Fragment } from "react";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
