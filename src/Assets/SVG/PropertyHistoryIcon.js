const PropertyHistoryIcon = (props) => {
  return (
    <svg
      data-testid="icon-property-history"
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
      <path d="M513 257L257 37 2 257h76v226h100v-25h-75V232H69L257 70l189 162h-36v226h-76v25h101V257zm-170 57c0-49-39-88-88-88-48 0-87 39-87 88s39 88 87 88c49 0 88-39 88-88zm24 0c0 62-50 113-112 113-61 0-112-51-112-113 0-63 51-113 112-113 62 0 112 50 112 113zm-144-31l-15 20 50 35 70-45-13-21-56 36z"></path>
    </svg>
  );
};

export default PropertyHistoryIcon;
