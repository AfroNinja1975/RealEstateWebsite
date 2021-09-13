import classes from './FooterRelated.module.css';
import HouseLogicIcon from "../../Assets/SVG/Footer/HouseLogicIcon";
import RealtorUniversityIcon from "../../Assets/SVG/Footer/RealtorUniversityIcon";

const footerRelated = [
  {
    icon: <HouseLogicIcon />,
    link: "https://www.facebook.com/realtor.com",
  },
  {
    icon: <RealtorUniversityIcon />,
    link: "https://www.youtube.com/user/RealtorDotCom",
  },
];

const FooterRelated = (props) => {
  return (
    <div className={classes.relatedLinks}>
      {footerRelated.map(({ icon, link }, idx) => {
        return (
          <a
            className={classes.footerRelatedLinks}
            href={link}
            key={idx}
            rel="noreferrer"
            target="_blank"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default FooterRelated;