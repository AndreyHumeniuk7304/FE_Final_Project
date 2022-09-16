import * as yup from "yup";

export const productSchema = yup.object({
  email: yup.string().required("Email is required.").email(),
});

export const subscribeInputName = [
  {
    inputName: "email",
    formName: "email",
    formType: "input",
  },
];

export const setMessage = (product) => `
      <div>
        <p>Brand: ${product.brand}</p>
        <p>Color: ${product.color}</p>
        <p>Current Price: ${product.currentPrice}</p>
        <p>Material: ${product.material}</p>
        <p>Mechanism: ${product.mechanism}</p>
        <p>${product.description}</p>
      </div>
  
`;
