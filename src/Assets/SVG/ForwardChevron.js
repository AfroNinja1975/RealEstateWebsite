const ForwardChevron = (props) => {
  return (
    <svg
      data-testid="icon-chevron-right"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      className="breadcrumb-divider"
      style={{
        color: "inherit",
        fill: "rgb(117,117,117)",
        fontSize: "14px",
        height: "1em",
        width: "1em",
      }}
    >
      <path d="M128 442l32 27 224-215L160 43l-32 27 196 184z"></path>
    </svg>
  );
};

export default ForwardChevron;
