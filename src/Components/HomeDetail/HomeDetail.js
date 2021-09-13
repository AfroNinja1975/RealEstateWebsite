import Grid from "../../UI/Grid/Grid";
import GridCell from "../../UI/Grid/GridCell";
import HomeAccordions from "./HomeAccordions";
import HomeDetailImageSlider from "./HomeDetailImageSlider";
import HomeStats from "./HomeStats";
import HomeDetailMap from "./HomeDetailMap";

const HomeDetail = (props) => {
  const details = props.details;

  const openHouseDate =
    details["open_houses"].length > 0
      ? details["open_houses"][0]["start_date"]
      : "";

  return (
    <Grid>
      <GridCell gridCount="75">
        <HomeDetailImageSlider
          images={details.photos}
          newFl={details["client_display_flags"]["is_new_listing"]}
          openHouseDate={openHouseDate}
          propertyId={details["property_id"]}
        />
        <Grid>
          <GridCell gridCount="70">
            <HomeStats details={details} />
          </GridCell>
          <GridCell gridCount="30">
            <HomeDetailMap
              lat={details.address.lat}
              long={details.address.long}
            />
          </GridCell>
        </Grid>
        <HomeAccordions details={details} />
      </GridCell>
      <GridCell gridCount="25"></GridCell>
    </Grid>
  );
};

export default HomeDetail;