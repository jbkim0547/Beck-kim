import * as Yup from "yup";

const ProviderDemoRequestSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('required'),
    emailAddress: Yup.string()
        .email('Invalid email address')
        .required('required'),
    phoneNumber: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .nullable(), 
    npi: Yup.string()
        .max(10, 'Must be 10 characters')
        .required('required')
})

export default ProviderDemoRequestSchema;