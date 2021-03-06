import * as Yup from "yup";

const locationDetailsSchema =
  
  Yup.object().shape({
    locationTypeId: Yup.number()
        .required("Must enter Location Type")
        .integer()
        .min(1, "Number must be 0 or larger"),
    lineOne: Yup.string()
        .required("Please enter a street address ")
        .min(2,"Not enough characters")
        .max(255,"Too many characters"),
    lineTwo: Yup.string()
        .min(2,"Not enough characters")
        .max(255,"Too many characters"),
    city: Yup.string()
        .required("Please enter a city")
        .min(2,"Not enough characters")
        .max(225,"Too many characters"),
    zip: Yup.string()
        .required("Please enter a zipcode.")
        .min(2,"Not enough characters")
        .max(50,"Too many characters"),
    stateId: Yup.number()
        .required("Please select a state.")
        .min(1,"Please select a state.")
        .max(51,"Exceeded maximum number"),
    latitude: Yup.number()
        .required("Please enter a latitude.")
        .min(-90.00000,"Exceeded minimum value")
        .max(90.00000,"Exceeded maximum value"),
    longitude: Yup.number()
        .required("Please enter a longitude.")
        .min(-179.99999,"Exceeded minimum value")
        .max(180.00000,"Exceeded maximum value"),
})

export  {locationDetailsSchema};

