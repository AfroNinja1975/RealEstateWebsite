import classes from './Hero.module.css';
import Button from "../../UI/Button/Button";
import Tab from "../../UI/Tab/TabContainer";
import Search from "../Search/Search";
import GiveawayImage from "../../Assets/Images/giveaway-image.png";

const Hero = (props) => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <h1 className={classes.heroHeading}>{props.heading}</h1>
        <p className={classes.heroParagraph}>{props.paragraph}</p>
      </div>
      <Tab active="Buy">
        <Search />
      </Tab>
      {props.advertisement && (
        <div className={classes.heroGiveaway}>
          <img
            alt="Veterans &amp; US Military $75k Homebuyer Giveaway"
            className={classes.giveawayImage}
            src={GiveawayImage}
          />
          <div className={classes.heroGiveawayText}>
            <p className={classes.heroParagraph}>
              Veterans &amp; US Military $75k Homebuyer Giveaway
            </p>
            <p>Restrictions Apply</p>
          </div>
          <Button type="primary">Enter Now</Button>
        </div>
      )}
    </div>
  );
};

export default Hero;