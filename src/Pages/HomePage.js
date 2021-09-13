import LocationProvider from "../store/LocationProvider";
import Houses from "../Components/Houses/Houses";
import Hero from "../Components/Hero/Hero";
import TwoColumns from "../Components/Homepage/TwoColumns";

function App() {
  return (
    <LocationProvider>
      <Hero
        advertisement={true}
        heading="Discover your perfect home"
        paragraph="With the most complete source of homes for sale and real estate near you"
      />
      <Houses />
      <TwoColumns />
    </LocationProvider>
  );
}

export default App;
