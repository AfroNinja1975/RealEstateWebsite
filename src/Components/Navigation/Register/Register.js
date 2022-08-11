import React, { useRef, useState } from "react";
import useHttp from "../../../hooks/use-http";
import Button from "../../../UI/Button/Button";
import classes from "../../../UI/Forms/Forms.module.css";

const isEmpty = (value) => value.trim().length === 0;
const isNotFiveChars = (value) => value.trim().length > 5;

const Register = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    firstname: true,
    lastname: true,
    username: true,
    password: true,
    email: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();
  const emailRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();

  const { sendRequest: createUser } = useHttp();

  const submitUserHandler = async (userData) => {
    setIsSubmitting(true);
    createUser({
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

    const firstnameValue = firstnameRef.current.value;
    const lastnameValue = lastnameRef.current.value;
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    const emailValue = emailRef.current.value;
    const streetValue = streetRef.current.value;
    const postalCodeValue = postalCodeRef.current.value;
    const cityValue = cityRef.current.value;

    const firstnameIsValid = !isEmpty(firstnameValue);
    const lastnameIsValid = !isEmpty(lastnameValue);
    const usernameIsValid = !isEmpty(usernameValue);
    const passwordIsValid = !isEmpty(passwordValue);
    const emailIsValid = !isEmpty(emailValue);
    const streetIsValid = !isEmpty(streetValue);
    const postalCodeIsValid =
      !isEmpty(postalCodeValue) && !isNotFiveChars(postalCodeValue);
    const cityIsValid = !isEmpty(cityValue);

    setFormInputsValidity({
      firstname: firstnameIsValid,
      lastname: lastnameIsValid,
      username: usernameIsValid,
      password: passwordIsValid,
      email: emailIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      firstnameIsValid &&
      lastnameIsValid &&
      usernameIsValid &&
      passwordIsValid &&
      emailIsValid &&
      streetIsValid &&
      postalCodeIsValid &&
      cityIsValid;

    if (!formIsValid) {
      return;
    }

    submitUserHandler({
      firstname: firstnameValue,
      lastname: lastnameValue,
      username: usernameValue,
      password: passwordValue,
      email: emailValue,
      street: streetValue,
      postalCode: postalCodeValue,
      city: cityValue,
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
                  formInputsValidity.firstname ? "" : classes.invalid
                }`}
              >
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" ref={firstnameRef} />
                {!formInputsValidity.firstname && (
                  <p>Please enter your first name</p>
                )}
              </div>
              <div
                className={`${classes.control} ${
                  formInputsValidity.firstname ? "" : classes.invalid
                }`}
              >
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" ref={lastnameRef} />
                {!formInputsValidity.lastname && (
                  <p>Please enter your last name</p>
                )}
              </div>
            </div>
            <div className={classes.formRow}>
              <div
                className={`${classes.control} ${
                  formInputsValidity.email ? "" : classes.invalid
                }`}
              >
                <label htmlFor="email">Email</label>
                <input type="text" id="email" ref={emailRef} />
                {!formInputsValidity.email && (
                  <p>Please enter your first name</p>
                )}
              </div>
            </div>
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
            <div className={classes.formRow}>
              <div
                className={`${classes.control} ${
                  formInputsValidity.street ? "" : classes.invalid
                }`}
              >
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetRef} />
                {!formInputsValidity.street && (
                  <p>Please enter a valid street</p>
                )}
              </div>
              <div
                className={`${classes.control} ${
                  formInputsValidity.city ? "" : classes.invalid
                }`}
              >
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityRef} size="3" />
                {!formInputsValidity.city && <p>Please enter a valid city</p>}
              </div>
              <div
                className={`${classes.control} ${
                  formInputsValidity.postalCode ? "" : classes.invalid
                }`}
              >
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  ref={postalCodeRef}
                  size="7"
                />
                {!formInputsValidity.postalCode && (
                  <p>Please enter a valid postal code</p>
                )}
              </div>
            </div>
            <div className={classes.actions}>
              <Button type="primary" onClick={confirmHandler}>
                Sign Up
              </Button>
              <Button type="primaryOutlined" onClick={props.onHideModal}>
                Cancel
              </Button>
            </div>
          </form>
          <div className={classes.haveAccount}>
            <p>
              Already have an account? Please{" "}
              <span onClick={props.onSwitchToLogin}>log in here</span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
