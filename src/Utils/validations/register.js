
import * as yup from "yup";

const validation = yup.object().shape({
  name: yup.string().required("name is required"),
  password: yup
    .string()
    .min(3, "password must be at least 3 char")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match"),
  mobile: yup.number().min(9).required(),
});

export default validation;
