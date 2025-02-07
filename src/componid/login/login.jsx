import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, sitPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || null
  );
  const students = [
    {
      email: "abdalluhyaseen@gmail.com",
      password: "123456A",
      Firstname: "abdalluh",
      lastname: "yaseen",
    },
    {
      email: "ahmadnasr@gmail.com",
      password: "123456N",
      Firstname: "ahmad",
      lastname: "nasr",
    },
  ];
  const teacher = [
    {
      email: "amroalWageei@gmail.com",
      password: "12345678A",
    },
    {
      email: "leenhammouri@gmail.com",
      password: "12345678L",
    },
  ];

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  // Sign Up
  const signUpFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
    }),
    onSubmit: (values) => {
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (storedUser && storedUser.email === values.email) {
        alert("This email is already registered.");
      } else {
        console.log("User registered:", values);

        localStorage.setItem(
          "registeredUser",
          JSON.stringify({ email: values.email, password: values.password })
        );
        setRegisteredUser({
          email: values.email,
          password: values.password,
        });
        toggleClass();
      }
    },
  });

  // Login
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      if (
        registeredUser &&
        values.email === registeredUser.email &&
        values.password === registeredUser.password
      ) {
        alert("Login successful!");
        Navigate("/", { replace: true });
      } else {
        alert("Invalid email or password!");
      }
    },
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (storedUser) {
      setRegisteredUser(storedUser);
    }
  }, []);

  return (
    <div className="body">
      <div className={`container7 ${isActive ? "active" : ""}`} id="container">
        <div className="form-container7 sign-up">
          <form onSubmit={signUpFormik.handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              name="firstName"
              value={signUpFormik.values.firstName}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
              placeholder="First Name"
            />
            {signUpFormik.touched.firstName &&
              signUpFormik.errors.firstName && (
                <span className="error">{signUpFormik.errors.firstName}</span>
              )}
            <input
              type="text"
              name="lastName"
              value={signUpFormik.values.lastName}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
              placeholder="Last Name"
            />
            {signUpFormik.touched.lastName && signUpFormik.errors.lastName && (
              <span className="error">{signUpFormik.errors.lastName}</span>
            )}
            <input
              type="email"
              name="email"
              value={signUpFormik.values.email}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
              placeholder="Email"
            />
            {signUpFormik.touched.email && signUpFormik.errors.email && (
              <span className="error">{signUpFormik.errors.email}</span>
            )}
            <input
              type="password"
              name="password"
              value={signUpFormik.values.password}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
              placeholder="Password"
            />
            {signUpFormik.touched.password && signUpFormik.errors.password && (
              <span className="error">{signUpFormik.errors.password}</span>
            )}
            <input
              type="password"
              name="confirmPassword"
              value={signUpFormik.values.confirmPassword}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
              placeholder="Confirm Password"
            />
            {signUpFormik.touched.confirmPassword &&
              signUpFormik.errors.confirmPassword && (
                <span className="error">
                  {signUpFormik.errors.confirmPassword}
                </span>
              )}
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container7 sign-in">
          <form onSubmit={loginFormik.handleSubmit}>
            <h1>Login</h1>
            <input
              type="email"
              name="email"
              value={loginFormik.values.email}
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              placeholder="Email"
            />
            {loginFormik.touched.email && loginFormik.errors.email && (
              <span className="error">{loginFormik.errors.email}</span>
            )}
            <input
              type="password"
              name="password"
              value={loginFormik.values.password}
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              placeholder="Password"
            />
            {loginFormik.touched.password && loginFormik.errors.password && (
              <span className="error">{loginFormik.errors.password}</span>
            )}

            <button type="submit">Login</button>
          </form>
        </div>

        <div className="toggle-container7">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <br />
              <button className="hidden" onClick={toggleClass}>
                Login
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <br />
              <button className="hidden" onClick={toggleClass}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
