const HOAIcon = (props) => {
  return (
    <svg
      data-testid="icon-calendar"
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
      <path d="M410 79h-22c-2 0-4 1-6 1v-8c2-12-3-25-14-32s-25-7-35 0c-11 7-17 20-15 32v7H192v-7c2-12-4-25-14-32-11-7-25-7-36 0-10 7-16 20-14 32v5h-23c-31 0-57 26-57 57v273c0 32 26 57 57 57h305c32 0 57-25 57-57V137c0-32-25-58-57-58zm-72-7c-1-4 1-9 5-12 3-2 9-2 12 0 4 3 6 8 5 12v53c1 4-1 9-5 12-3 3-9 3-12 0-4-3-6-8-5-12zm-189 0c-1-4 1-9 5-12 3-2 9-2 12 0 4 3 6 8 5 12v53c1 4-1 9-5 12-3 3-9 3-12 0-4-3-6-8-5-12zm-44 35h23v18c-2 12 4 25 14 32 11 7 25 7 36 0 10-7 16-20 14-32v-16h124v16c-2 12 4 25 15 32 10 7 24 7 35 0s16-20 14-32v-18c2 1 4 1 7 1h21c15 0 28 12 28 28v64H78v-66c0-15 12-27 27-27zm305 328H105c-15 0-27-13-27-28V222h360v185c0 15-13 28-28 28z"></path>
    </svg>
  );
};

export default HOAIcon;