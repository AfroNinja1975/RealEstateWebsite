const InfoIcon = (props) => {
  return (
    <svg
      data-testid="icon-info"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      className="icon-info"
      data-tip="true"
      data-for={props.dataFor}
      style={{
        display: "inline-block",
        width: "1em",
        height: "1em",
        fontSize: "24px",
        color: "inherit",
        fill: "currentColor",
      }}
    >
      <path d="M256 434c-64 0-123-34-155-89s-32-125 0-181c16-26 38-48 64-64 28-16 59-24 91-24s63 8 90 24c27 15 49 38 64 64 33 56 33 126 0 182-15 27-37 49-64 64-27 16-58 24-90 24zm0 35c38 0 74-11 107-30 32-18 58-44 76-76 39-67 39-150 0-217-18-31-44-57-76-75-33-19-70-29-107-28-38-1-76 9-109 28-32 18-58 44-76 76-19 33-29 71-28 109 0 38 10 74 29 107 38 65 108 106 184 106zm0-274c12 0 21-9 21-21s-9-21-21-21-21 9-21 21 9 21 21 21zm35 135h-18v-85c0-8-7-15-15-15h-19c-8 0-15 7-15 15s7 15 15 15h4v71h-22c-8 0-14 7-14 15s6 15 14 15h71c8 0 15-7 15-15s-7-15-15-15z"></path>
    </svg>
  );
};

export default InfoIcon;
