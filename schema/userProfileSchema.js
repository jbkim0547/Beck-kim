import * as Yup from "yup";


const userProfileSchema = Yup.object().shape
({
        firstName: Yup.string()
        .min(2, "must exceed 1 character")
        .max(100, "cannot exceed 100 characters")
        .required("Required"),
        mi: Yup.string().nullable()
        .min(1, "must exceed 1 character")
        .max(2, "cannot exceed 2 characters"),
        lastName: Yup.string()
        .min(2, "must exceed 1 character")
        .max(100, "cannot exceed 100 characters")
        .required("Required"),

});

export default userProfileSchema ;