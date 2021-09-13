const HomeIcon = (props) => {
  return (
    <svg
      data-testid="icon-home"
      viewBox="0 0 512 512"
      style={{
        display: "inline-block",
        width: "1.5em",
        height: "1.5em",
        fontSize: "24px",
        color: "inherit",
        fill: "currentColor",
      }}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M262 81l169 172h-52l-2 157c0 10-8 18-18 18H157c-5 0-10-2-13-5-4-4-6-9-6-14V253H82L262 81m0-30c-8 0-15 3-21 9L61 231c-9 9-12 22-7 33 5 12 15 19 28 19h26v126c0 27 22 49 49 49h202c26 0 48-21 48-48l1-127h23c12 0 23-7 27-18 5-11 2-24-6-33L284 60c-6-6-14-9-22-9z"></path>
    </svg>
  );
};

export default HomeIcon;