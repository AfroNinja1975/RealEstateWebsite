const ChevronUp = (props) => {
  return (
    <svg
      data-testid="chevron-up"
      viewBox="0 0 512 512"
      style={{
        display: "inline-block",
        width: "1em",
        height: "1em",
        fontSize: "24px",
        color: "inherit",
        fill: "currentColor",
      }}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M70 384l-27-32 215-224 211 224-27 32-184-196z"></path>
    </svg>
  );
};

export default ChevronUp;
