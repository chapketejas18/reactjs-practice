import * as Yup from "yup";
export const signUpSchema = Yup.object({
  UserName: Yup.string().min(3).max(20).required("Please enter your name"),
  Email: Yup.string().email().required("Please Enter Email"),
  PhoneNo: Yup.string()
    .min(10, "Phone number must be exactly 10 digits")
    .required("Please Enter correct Phone Number")
    .max(10, "Phone number must be exactly 10 digits"),
  Password: Yup.string().min(6).required("Should be min 6 character"),
  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Password must match"),
});
