import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

/****site route*****/
import Header from "./layout/header";
//  Home page
const Home = lazy(() => import("./pages/Home"));
const Markets = lazy(() => import("./pages/Markets"));
const Borrow = lazy(() => import("./pages/Borrow"));
const Lend = lazy(() => import("./pages/Lend"));
const XAMPL = lazy(() => import("./pages/xAMPL"));

const loader = (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div className="reverse-spinner" />
  </div>
);

const AppRouter = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Suspense fallback={loader}>
          <Route exact path="/" component={Home} />
          <Route exact path="/markets" component={Markets} />
          <Route exact path="/borrow" component={Borrow} />
          <Route exact path="/lend" component={Lend} />
          <Route exact path="/xampl" component={XAMPL} />
        </Suspense>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
