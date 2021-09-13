import classes from "./Footer.module.css";
import Section from "../../UI/Section/Section";
import FooterDownloads from "./FooterDownloads";
import FooterLinks from "./FooterLinks";
import FooterRelated from "./FooterRelated";
import FooterSocial from "./FooterSocial";

const Footer = (props) => {
  return (
    <Section background="dark-gray" verticalPadding="sm">
      <div className={classes.footer}>
        <div className={classes.footerHeader}>
          <FooterSocial />
          <FooterRelated />
        </div>
        <FooterLinks />
        <FooterDownloads />
      </div>
    </Section>
  );
};

export default Footer;
