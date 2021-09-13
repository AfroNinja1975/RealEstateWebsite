const BackChevron = (props) => {
  return (
    <svg
      data-testid="icon-chevron-left-heavy"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      style={{
        color: 'inherit',
        fill: 'rgb(51,51,51)',
        fontSize: '16px',
        height: '1em',
        width: '1em',
      }}
    >
      <path d="M211 253L384 74l-45-42-211 221 214 227 42-42z"></path>
    </svg>
  );
};

export default BackChevron;
