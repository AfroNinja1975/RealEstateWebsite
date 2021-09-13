const InstagramIcon = (props) => {
  return (
    <svg
      data-testid="icon-instagram"
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
      <path d="M497 374c0 76-61 138-137 138H138C62 512 0 450 0 374V138C0 62 62 0 138 0h222c76 0 137 62 137 138zm-248 22c77 0 139-62 140-140 2-82-52-139-140-141-77-3-141 62-141 140s63 141 141 141zm184-292c0-19-15-34-34-34s-34 15-34 34 15 35 34 35 34-16 34-35zm-81 151c1-61-36-101-104-103-56-2-103 46-103 103s46 104 104 104c56 0 102-46 103-104z"></path>
    </svg>
  );
};

export default InstagramIcon;
