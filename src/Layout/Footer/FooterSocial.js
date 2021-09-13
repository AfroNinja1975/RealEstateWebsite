import classes from './FooterSocial.module.css';
import FacebookIcon from "../../Assets/SVG/Footer/FacebookIcon";
import InstagramIcon from "../../Assets/SVG/Footer/InstagramIcon";
import LinkedInIcon from "../../Assets/SVG/Footer/LinkedInIcon";
import PinterestIcon from "../../Assets/SVG/Footer/PinterestIcon";
import TwitterIcon from "../../Assets/SVG/Footer/TwitterIcon";
import YouTubeIcon from "../../Assets/SVG/Footer/YouTubeIcon";

const footerSocialLinks = [
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/realtor.com",
  },
  {
    icon: <TwitterIcon />,
    link: "https://twitter.com/REALTORdotcom",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/company/realtor-com/",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/realtordotcom/?hl=en",
  },
  {
    icon: <PinterestIcon />,
    link: "https://www.pinterest.com/realtordotcom/",
  },
  {
    icon: <YouTubeIcon />,
    link: "https://www.youtube.com/user/RealtorDotCom",
  },
];

const FooterSocial = (props) => {
  return (
    <div className={classes.socialLinks}>
      {footerSocialLinks.map(({icon, link}, idx) => {
        return (
          <a
            className={classes.footerSocialLinks}
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

export default FooterSocial;