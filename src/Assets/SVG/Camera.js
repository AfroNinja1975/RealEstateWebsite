const Camera = (props) => {
  return (
    <svg
      data-testid="icon-camera"
      viewBox="0 0 512 512"
      style={{
        display:"inline-block",
        width:"1.5em",
        height:"1.5em",
        fontSize:"16px",
        color:"inherit",
        fill:"currentColor"}}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M414 422H97c-30 0-54-23-54-53V182c0-29 24-53 54-53h78c13-24 28-35 44-35h72c17 0 32 11 45 35h78c14 0 28 5 39 15 10 10 16 24 16 38v187c0 14-6 28-16 38-11 10-24 16-39 15zM97 159c-14 0-25 10-25 23v187c0 13 11 24 25 24h317c13 0 24-11 25-24V182c-1-13-12-23-25-23h-95l-5-8c-13-26-21-27-23-27h-72s-9 0-23 27l-4 8zm159 200c-23 1-44-9-60-26-19-22-25-53-16-81 8-26 28-46 54-53s54-1 74 17c22 20 32 49 26 78-6 32-31 58-63 64-5 1-10 2-15 1zm0-141c-7 0-13 1-20 3-17 6-30 20-35 37-7 21-2 44 12 61 14 15 34 22 55 18 23-5 41-23 45-47 5-21-3-43-19-58-11-9-24-14-38-14z"></path>
    </svg>
  );
};

export default Camera;