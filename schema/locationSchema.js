import * as Yup from "yup";


const locationSchema =
  
  
  Yup.object().shape({
    lineOne: Yup.string()
      .min(2,"Too Short")
      .max(50,"Max Reached")
      .required("Please use the map searchbar."),
      lineTwo: Yup.string()
        .nullable()
        .min(2,"Too Short")
        .max(50,"Max Reached"),
    zip: Yup.string()
      .min(2,"Too Short")
      .max(50,"Max Reached")
      .required("Please use the map searchbar."),
    city: Yup.string()
      .min(2,"Too Short")
      .max(225,"Max Reached")
      .required("Please use the map searchbar."),
    state: Yup.string()
      .min(2,"Too Short")
      .max(32,"Max Reached")
      .required("Please use the map searchbar."),
})

export  {locationSchema};

