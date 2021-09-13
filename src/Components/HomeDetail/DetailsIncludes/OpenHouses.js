import classes from './OpenHouses.module.css';

import Button from "../../../UI/Button/Button";
import OpenHousesSchedule from "./OpenHousesSchedule";

const OpenHouses = (props) => {
  return (
    <>
      <div className={classes.openHouses}>
        {props.list.length > 0 ? (
          props.list.map(({ start_date, end_date }, idx) => {
            return <OpenHousesSchedule start={start_date} end={end_date} key={idx} />;
          })
        ) : (
          <p>Contact agent for a private showing.</p>
        )}
      </div>
      <div className={classes.appointment}>
        <Button
          className={classes.appointmentButton}
          href={props.url}
          type="primaryOutlined"
        >
          Add to calendar
        </Button>
        Can't make it to an open house? Contact agent for a private showing.
      </div>
      <Button href={props.url} type="primary">
        Schedule Tour
      </Button>
    </>
  );
};

export default OpenHouses;