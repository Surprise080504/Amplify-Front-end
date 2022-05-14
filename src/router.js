import React, { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

/****site route*****/
import Header from "./layout/header";
//  Home page
const Home = lazy(() => import("./pages/Home"));
const Markets = lazy(() => import("./pages/Markets"));
const Borrow = lazy(() => import("./pages/Borrow"));
const Lend = lazy(() => import("./pages/Lend"));
const XAMPL = lazy(() => import("./pages/xAMPL"));
const LandingPage = lazy(() => import("./pages/LandingPage"));

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
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname !== "/home" && <Header />}
      <Switch>
        <Suspense fallback={loader}>
          <Route exact path="/" component={Home} />
          <Route exact path="/markets" component={Markets} />
          <Route exact path="/:marketName/borrow" component={Borrow} />
          <Route exact path="/:marketName/lend" component={Lend} />
          <Route exact path="/xampl" component={XAMPL} />
          <Route exact path="/home" component={LandingPage} />
        </Suspense>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
