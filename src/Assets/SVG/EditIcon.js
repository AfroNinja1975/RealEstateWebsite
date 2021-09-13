const EditIcon = (props) => {
  return (
    <svg
      data-testid="icon-edit"
      viewBox="0 0 512 512"
      style={{
        display: "inline-block",
        width: "1em",
        height: "1em",
        fontSize: "16px",
        color: "rgb(51, 119, 204)",
        fill: "currentColor",
      }}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M452 73l-17-18c-10-10-23-15-36-15-14 0-27 5-36 15L87 329c-3 3-5 4-6 8L43 444c-2 6-2 12 2 17 3 5 9 8 15 8 2 1 4 1 5 0l96-38c8-5 15-11 21-18l270-268c20-20 20-53 0-72zM162 391c-4 4-9 8-14 12l-69 28 29-81 233-231 48 47zm269-267l-28 27-48-47 29-28c8-8 21-8 30 0l17 18c4 4 7 9 7 15-1 5-3 11-7 15z"></path>
    </svg>
  );
};

export default EditIcon;
