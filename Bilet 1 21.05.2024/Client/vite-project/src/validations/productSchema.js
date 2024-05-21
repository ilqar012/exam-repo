import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  title: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  imgSrc: Yup.string().required("Required"),
});
