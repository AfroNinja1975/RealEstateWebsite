const GarageIcon = (props) => {
  return (
    <svg
      data-testid="icon-indoor-garage"
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
      <path d="M435 43c25 0 45 20 45 44v373c0 8-7 15-15 15-7 0-14-6-15-13V223h-77l17 62c1 1 1 3 1 4 10 8 16 20 16 34v69c0 17-11 33-26 40 0 1 1 3 1 4v10c0 14-12 26-26 26h-21c-14 0-26-12-26-26v-10H203v10c0 13-11 24-24 26h-23c-14 0-26-12-26-26v-10c0-1 1-3 1-4-15-7-26-23-26-40v-69c0-14 7-26 16-34v-2l1-2 17-62H62v237c0 8-7 15-15 15s-14-6-15-13V87c0-24 20-44 45-44zm-75 393h-29v10c0 2 1 4 3 4l1 1h21c2 0 4-3 4-5zm-179 0h-29v10c0 2 1 4 3 4l1 1h21c2 0 4-3 4-5zm-32-128h-1c-6 1-12 6-12 13l-1 2v69c0 8 7 15 15 15h212c8 0 15-7 15-15v-69c0-8-7-15-15-15h1l-10 2c-64 12-129 12-192 0zm196 30c8 0 15 6 15 15 0 8-7 14-15 14s-15-6-15-14c0-9 7-15 15-15zm-178 0c8 0 15 6 15 15 0 8-7 14-15 14s-15-6-15-14c0-9 7-15 15-15zm175-115H170l-16 56 13 2c59 11 120 11 180 0l11-2zm93-150H77c-8 0-15 6-15 14v106h388V87c0-7-5-13-13-14z"></path>
    </svg>
  );
};

export default GarageIcon;