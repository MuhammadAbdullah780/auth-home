import * as yup from "yup";

export const SignUpSchema = yup.object({
  username: yup
    .string()
    .min(3, "Username must contain minimum of three characters")
    .required("Username is Required."),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Invalid Password"),
});
