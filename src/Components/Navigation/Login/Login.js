import React, { useRef, useState } from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import classes from "../../../UI/Forms/Forms.module.css";
import useHttp from "../../../hooks/use-http";

const isEmpty = (value) => value.trim().length === 0;

const Login = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    username: true,
    password: true,
  });

  const usernameRef = useRef();
  const passwordRef = useRef();

  const { sendRequest: validateUser } = useHttp();

  const submitUserHandler = async (userData) => {
    setIsSubmitting(true);
    validateUser({
      url: "https://custom-hooks-2150e-default-rtdb.firebaseio.com/users.json",
      method: "POST",
      body: {
        user: userData,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    const usernameIsValid = !isEmpty(usernameValue);
    const passwordIsValid = !isEmpty(passwordValue);

    setFormInputsValidity({
      username: usernameIsValid,
      password: passwordIsValid,
    });

    const formIsValid =
      usernameIsValid &&
      passwordIsValid;

    if (!formIsValid) {
      return;
    }

    submitUserHandler({
      username: usernameValue,
      password: passwordValue,
    });
  };

  const isSubmittingUserContent = <p>Sending user data...</p>;

  const didSubmitUserContent = (
    <>
      <h3>Thank you for signing up to REALTOR.com!</h3>
      <p>
        We hope you enjoy your time browsing the homes available in our
        database. Hopefully you find the home of your dreams!
      </p>
      <div className={classes.actions}>
        <Button type="primary" onClick={props.onHideModal}>
          Close
        </Button>
      </div>
    </>
  );

  return (
    <>
      {isSubmitting && !didSubmit && isSubmittingUserContent}
      {!isSubmitting && didSubmit && didSubmitUserContent}
      {!isSubmitting && !didSubmit && (
        <>
          <form>
            <h3 className={classes.formHeader}>Create an account</h3>
            <div className={classes.formRow}>
              <div
                className={`${classes.control} ${
                  formInputsValidity.username ? "" : classes.invalid
                }`}
              >
                <label htmlFor="username">Username</label>
                <input type="text" id="username" ref={usernameRef} />
                {!formInputsValidity.username && (
                  <p>Please enter a user name</p>
                )}
              </div>
            </div>
            <div className={classes.formRow}>
              <div
                className={`${classes.control} ${
                  formInputsValidity.password ? "" : classes.invalid
                }`}
              >
                <label htmlFor="password">Password</label>
                <input type="text" id="password" ref={passwordRef} />
                {!formInputsValidity.password && <p>Please enter a password</p>}
              </div>
            </div>
            <div className={classes.actions}>
              <Button type="primary" onClick={confirmHandler}>
                Login
              </Button>
              <Button type="primaryOutlined" onClick={props.onHideModal}>
                Cancel
              </Button>
            </div>
          </form>
          <div className={classes.haveAccount}>
            <p>
              Don't have an account? Please{" "}
              <span onClick={props.onSwitchToRegister}>sign up here</span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Login;