import LocationProvider from "./store/LocationProvider";
import FavoritesProvider from "./store/FavoritesProvider";
// import Houses from "./Components/Houses/Houses";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
// import Hero from "./Components/Hero/Hero";

import { Route, Switch } from "react-router-dom";

// Pages
import Buy from "./Pages/Buy";
import FindRealtors from "./Pages/FindRealtors";
import Property from "./Pages/Property";
import HomePage from "./Pages/HomePage";
import Insights from "./Pages/Insights";
import Mortgage from "./Pages/Rent";
import MyHome from "./Pages/MyHome";
import Rent from "./Pages/Rent";
import Sell from "./Pages/Sell";

const routes = [
  {
    exact: true,
    path: "/",
    component: <HomePage />,
  },
  {
    exact: false,
    path: "/Buy",
    component: <Buy />,
  },
  {
    exact: true,
    path: "/Property/:propertyid/:listingid",
    component: <Property />,
  },
  {
    exact: true,
    path: "/Rent",
    component: <Rent />,
  },
  {
    exact: true,
    path: "/Sell",
    component: <Sell />,
  },
  {
    exact: true,
    path: "/Mortgage",
    component: <Mortgage />,
  },
  {
    exact: true,
    path: "/FindRealtors",
    component: <FindRealtors />,
  },
  {
    exact: true,
    path: "/MyHome",
    component: <MyHome />,
  },
  {
    exact: true,
    path: "/Insights",
    component: <Insights />,
  },
];

function App() {
  return (
    <LocationProvider>
      <Header />
      <FavoritesProvider>
        <Switch>
          {routes.map(({ component, exact, path }, idx) => {
            if (exact) {
              return (
                <Route key={idx} path={path} exact>
                  {component}
                </Route>
              );
            } else {
              return (
                <Route key={idx} path={path}>
                  {component}
                </Route>
              );
            }
          })}
        </Switch>
      </FavoritesProvider>
      <Footer />
    </LocationProvider>
  );
}

export default App;
