import classes from "./FooterDownloads.module.css";
import AppleDownload from "../../Assets/SVG/Footer/AppleDownload";
import GooglePlayDownload from "../../Assets/SVG/Footer/GooglePlayDownload";

const FooterDownloads = (props) => {
  return (
    <>
      <h3>GET THE APP</h3>
      <div className={classes.downloadLinks}>
        <a
          className={classes.footerDownloadLinks}
          href="https://apps.realtor.com/mUAZ/41b73882"
          rel="noreferrer"
          target="_blank"
        >
          <AppleDownload />
        </a>
        <a
          className={classes.footerDownloadLinks}
          href="https://apps.realtor.com/mUAZ/41b73882"
          rel="noreferrer"
          target="_blank"
        >
          <GooglePlayDownload />
        </a>
      </div>
      <p className={classes.footerCopyright}>
        ©2021{" "}
        <a href="https://www.nar.realtor/" rel="noreferrer" target="_blank">
          National Association of REALTORS &trade;
        </a>{" "}
        and{" "}
        <a href="https://www.move.com/" rel="noreferrer" target="_blank">
          Move, Inc
        </a>{" "}
        All rights reserved.
      </p>
    </>
  );
};

export default FooterDownloads;
