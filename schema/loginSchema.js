import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email:Yup.string().email()
    .min(1,"Please provide a email.")
    .max(100,"Please provide a email.")
    .required("Please provide a email."),

    password:Yup.string()
    .min(2,"Please provide a password.")
    .max(20,"Please provide a password.")
    .required("Please provide a password."),
    
    rememberMe:Yup.boolean()
    .required("Y/N")
    .oneOf([true,false],"Yes or no.")
});

export default loginSchema;