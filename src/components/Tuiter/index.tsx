import React from "react";
import { Provider } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import { store } from "./store";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";

const Tuiter: React.FC = () => (
  <Provider store={store}>
  <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css"
      integrity="sha384-nEnU7Ae+3lD52AK+RGNzgieBWMnEfgTbRHIwEvp1XXPdqdO6uLTd/NwXbzboqjc2"
      crossOrigin="anonymous"
    />
    <h1>Tuiter</h1>
    <Link to="/hello">Hello</Link> |<Link to="/labs">Labs</Link>
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar />
      </div>
      <div className="col col-lg-5 col-9">
      <Outlet />
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList />
      </div>
    </div>
  </>
  </Provider>

);

export default Tuiter;
