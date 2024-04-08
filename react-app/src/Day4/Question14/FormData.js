import TextField from "@mui/material/TextField";
import styles from "../assignment4.module.css";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "../Question14/schema";
import { useState } from "react";

export const FormData = () => {
  const [status, setStatus] = useState(false);
  const [valueObject, setValue] = useState({});

  const initialValues = {
    UserName: "",
    Email: "",
    PhoneNo: "",
    Password: "",
    ConfirmPassword: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        setStatus(true);
        setValue(values);
        action.resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.div}>
        <div>
          <TextField
            label="Username"
            variant="filled"
            value={values.UserName}
            name="UserName"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.UserName && touched.UserName ? (
            <p>{errors.UserName}</p>
          ) : null}
        </div>
        <div>
          <TextField
            label="Email"
            variant="filled"
            value={values.Email}
            name="Email"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Email && touched.Email ? <p>{errors.Email}</p> : null}
        </div>
        <div>
          <TextField
            label="PhoneNumber"
            variant="filled"
            value={values.PhoneNo}
            name="PhoneNo"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur} 
          />
          {errors.PhoneNo && touched.PhoneNo ? <p>{errors.PhoneNo}</p> : null}
        </div>
        <div>
          <TextField
            label="Password"
            variant="filled"
            type="password"
            value={values.Password}
            name="Password"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.Password && touched.Password ? (
            <p>{errors.Password}</p>
          ) : null}
        </div>
        <div>
          <TextField
            label="ConfirmPassword"
            type="password"
            variant="filled"
            value={values.ConfirmPassword}
            name="ConfirmPassword"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.ConfirmPassword && touched.ConfirmPassword ? (
            <p>{errors.ConfirmPassword}</p>
          ) : null}
        </div>
        <Button variant="outlined" type="submit">
          SUBMIT
        </Button>
      </div>
      {status && (
        <div>
          <h2>Form Values:</h2>
          <p>
            <strong>Username:</strong> {valueObject.UserName}
          </p>
          <p>
            <strong>Email:</strong> {valueObject.Email}
          </p>
          <p>
            <strong>Phone Number:</strong> {valueObject.PhoneNo}
          </p>
          <p>
            <strong>Password:</strong> {valueObject.Password}
          </p>
          <p>
            <strong>Confirm Password:</strong> {valueObject.ConfirmPassword}
          </p>
        </div>
      )}
    </form>
  );
};