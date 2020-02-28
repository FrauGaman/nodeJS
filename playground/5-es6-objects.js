//Object property shorthand

const name = 'Margarita';
const userAge = 26;
const user = {
  name,
  userAge,
  location: 'Russia',
};
console.log(user);

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
};

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
};

transaction('order', product);
