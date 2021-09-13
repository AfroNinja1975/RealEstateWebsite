const SearchIcon = (props) => {
  return (
    <svg
      data-testid="icon-search"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      style={{
        color: "#FFF",
        display: "block",
        fill: "#FFF",
        height: "1em",
        width: "1em",
      }}
    >
      <path d="M459 434l-82-82c64-76 57-189-16-257-73-67-187-65-257 6-71 70-73 184-5 257 67 73 180 80 256 16l83 81c2 3 6 5 10 5s8-2 11-5c3-2 4-6 4-10s-1-8-4-11zm-223-47c-87 0-157-70-157-157S149 73 236 73c86 0 157 70 157 157s-70 157-157 157z"></path>
    </svg>
  );
};

export default SearchIcon;
