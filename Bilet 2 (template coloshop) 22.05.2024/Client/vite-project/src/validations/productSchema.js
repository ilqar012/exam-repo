import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  disCount: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  imgSrc: Yup.string().required("Required"),
});
