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

export const setMessage = (product) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .box {
        display: flex;
        justify-content: space-between;
        max-width: 420;
      }
      .box-img {
        width: 120px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="box-img">
        <img src="${product.imageUrls[0]}" alt="image" />
      </div>
      <div>
        <p>Brand: ${product.brand}</p>
        <p>Color: ${product.color}</p>
        <p>Current Price: ${product.currentPrice}</p>
        <p>Material: ${product.material}</p>
        <p>Mechanism: ${product.mechanism}</p>
        <p>${product.description}</p>
      </div>
    </div>
  </body>
</html>
`;
