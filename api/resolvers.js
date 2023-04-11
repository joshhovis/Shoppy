const resolvers = {
  Query: {
    products: () => {
      // Return array of all products
    },
    product: (_, { id }) => {
      // Return product with given id
    },
    user: (_, { id }) => {
      // Return user with given id
    },
  },
  Mutation: {
    createProduct: (_, { name, description, price, imageUrl }) => {
      // Create new product with given parameters and return it
    },
    updateProduct: (_, { id, name, description, price, imageUrl }) => {
      // Update product with given id and paramaters and return it
    },
    deleteProduct: (_, { id }) => {
      // Delete product with given id and return its id
    },
    createUser: (_, { firstName, lastName, email, password }) => {
      // Create new user with given parameters and return it
    },
    updateUser: (_, { id, firstName, lastName, email, password }) => {
      // Update user with given id and parameters and return it
    },
    addToCart: (_, { productId, quantity }) => {
      // Add new cart item with given product and quantity to user's cart and return it
    },
    updateCartItem: (_, { id, quantity }) => {
      // Update cart item with given id and quantity and return it
    },
    removeCartItem: (_, { id }) => {
      // Remove cart item with given id from users cart and return it
    },
  },
  User: {
    cartItems: (parent) => {
      // Return cart items for user with given parent id
    },
  },
  Product: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    description: (parent) => parent.description,
    price: (parent) => parent.price,
    imageUrl: (parent) => parent.imageUrl,
  },
  CartItem: {
    id: (parent) => parent.id,
    product: (parent) => parent.product,
    quantity: (parent) => parent.quantity,
  },
};

module.exports = resolvers;
