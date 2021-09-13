import classes from './FooterLinks.module.css';

const footerLinks = [
  {
    link: "/about",
    text: "About Us",
  },
  {
    link: "/Careers",
    text: "Careers",
  },
  {
    link: "/Feedback",
    text: "Feedback",
  },
  {
    link: "/MediaRoom",
    text: "MediaRoom",
  },
  {
    link: "/AdChoices",
    text: "Ad Choices",
  },
  {
    link: "/AdvertiseWithUs",
    text: "Advertise With Us",
  },
  {
    link: "/AgentSupport",
    text: "Agent Support",
  },
  {
    link: "/Privacy",
    text: "Privacy",
  },
  {
    link: "/Terms",
    text: "Terms",
  },
  {
    link: "/HomeMade",
    text: "Home Made",
  },
  {
    link: "/TechBlog",
    text: "Tech Blog",
  },
  {
    link: "/Sitemap",
    text: "Sitemap",
  },
  {
    color: "orange",
    link: "/DoNotSellMyPersonalInformation",
    text: "Do Not Sell My Personal Information",
  },
];

const FooterLinks = (props) => {
  return (
    <div className={classes.footerLinksContainer}>
      {footerLinks.map(({ color, link, text }, idx) => {
        return (
          <a
            className={`${classes.footerLinks} ${color === "orange" && classes.footerLinksOrange}`}
            href={link}
            key={idx}
            rel="noreferrer"
            target="_blank"
          >
            {text}
          </a>
        );
      })}
    </div>
  );
};

export default FooterLinks;