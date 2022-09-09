import { object, string } from "yup";

export const commentsInputName = [
  {
    inputName: "content",
    formType: "textarea",
    label: "comment",
  },
];

export const commentsSchema = object({
  content: string().required("input some comment"),
});
