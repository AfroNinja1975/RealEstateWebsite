import React, {useState, useEffect} from 'react';

const Favorite = (props) => {
  const [fill, setFill] = useState("rgba(0,0,0,0.4)");
  const [stroke, setStroke] = useState("#FFF");

  useEffect(() => {
    if (props.type === "light") {
      setFill("transparent");
      setStroke("rgba(0,0,0,0.6)");
    }

    if (props.type === "lightSelected") {
      setFill("rgb(217, 34, 40)");
      setStroke("rgb(217, 34, 40)");
    }

    if (props.type === "darkSelected") {
      setFill("rgb(217, 34, 40)");
      setStroke("#FFF");
    }
  }, [props.type]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      data-testid="complex-svg-heart"
      width="40px"
      height="40px"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        data-testid="complex-svg-heart-path"
        d="M20 8.3c4.9-8 18.5-5.9 18.5 5l-.1 1.9c-.8 4.6-4 9.3-8.9 14a66.6 66.6 0 0 1-8.7 7l-.7.6-.8-.5a27.6 27.6 0 0 1-2.8-1.7c-2-1.4-4-3-6-4.7-5.6-5-9-10.3-9-15.8A10 10 0 0 1 20 8.3z"
      ></path>
    </svg>
  );
};

export default Favorite;
