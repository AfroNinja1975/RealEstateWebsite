const YouTubeIcon = (props) => {
  return (
    <svg
      data-testid="icon-youtube"
      viewBox="0 0 512 512"
      style={{
        display: "inline-block",
        width: "1em",
        height: "1em",
        fontSize: "24px",
        color: "rgb(51, 119, 204)",
        fill: "rgb(37, 37, 37)",
      }}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 85c0-23 19-42 43-42h426c24 0 43 19 43 42v331c0 23-19 43-43 43H43c-24 0-43-19-43-43zm184 70v196l10-6 155-80 21-12 12-6-12-6-165-87-11-6-10-5z"></path>
    </svg>
  );
};

export default YouTubeIcon;
