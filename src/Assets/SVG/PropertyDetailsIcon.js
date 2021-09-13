const PropertyDetailsIcon = (props) => {
  return (
    <svg
      data-testid="icon-property-details"
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
      <path d="M83 227v250h210v-27H110V200H72L268 35l224 189 17-21L268 0-1 227zm76 166h133v-27H159zm183-36l-13 23 44 27 45-83-24-12-31 58zm0 106l-13 23 44 27 45-83-24-13-31 59zM159 287h133v-27H159zm183-35l-13 22 44 27 45-83-24-12-31 58z"></path>
    </svg>
  );
};

export default PropertyDetailsIcon;
