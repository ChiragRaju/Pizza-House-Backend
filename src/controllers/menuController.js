
const Pizza = require('../models/PizzaMenu');

const getAllPizzas = (req, res) => {
  
  const pizzas = [
    new Pizza(1, 'Margherita', 10.99, ['Tomato Sauce', 'Mozzarella', 'Basil'], false, 'margherita.jpg'),
    new Pizza(2, 'Pepperoni', 12.99, ['Tomato Sauce', 'Pepperoni', 'Cheese'], false, 'pepperoni.jpg'),
    
  ];

  res.json(pizzas);
};

module.exports = {
  getAllPizzas,
};
