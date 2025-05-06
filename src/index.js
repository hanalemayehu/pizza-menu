import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';



const pizzaData = [
  {
    name: "MARGHERITA",
    ingredients: "Pizza Sauce, Mozzarella, Sliced Tomatoes, Oregano, Extra Virgin Olive Olie, Garlic & Basil",
    price: '300ETB',
    photoName: "pizzas/margarita.jpg",
    soldOut: false,
  },
  {
    name: "PEPERONI",
    ingredients: "Pizza Sauce,buffalo Mozzarella, Provolone, Beef Pepperoni, roasted garlic",
    price: '450ETB',
    photoName: "pizzas/peperoni.jpg",
    soldOut: false,
  },
  {
    name: " SPECIAL PIZZA",
    ingredients: "Pizza Sauce, Mozzarella & Provalone, Camembert Cheese, Anchovies, Olives, Beef Sausage, Chicken Supreme, Sundried Tomato, Pine Seed",
    price: '350ETB',
    photoName: "pizzas/special.jpg",
    soldOut: false,
  },
  {
    name: "MEAT LOVERS",
    ingredients: "Pizza Sauce, Mozzarella & Provolone Cheese, Sweet Pepper, Beef Sausage",
    price: '300ETB',
    photoName: "pizzas/meat lovers.jpg",
    soldOut: false,
  },
  {
    name: "SPICE OVERLOADED",
    ingredients: "Onions, Capsicum, grren Chillis,",
    price: '300ETB',
    photoName: "pizzas/spice overloaded.jpg",
    soldOut: false,
  },
  {
    name: "SPICY PRAWN",
    ingredients: "Cilantro prawns, mozzarella",
    price: '500ETB',
    photoName: "pizzas/spicy prawn.jpg",
    soldOut: false,
  },
  {
    name: "ARRABIATTA",
    ingredients: "Spicy tomato sauce, thin tomato slices, mozzarella, goat cheese, chilli flakes and garlic chips",
    price: '350ETB',
    photoName: "pizzas/arrabiata.jpg",
    soldOut: false,
  },
  {
    name: "QUATTRO FORMAGGI",
    ingredients: "Mozzarella, gorgonzola, ricotta, parmesan",
    price: '350ETB',
    photoName: "pizzas/quattro.jpg",
    soldOut: false,
  },
  {
    name: "PRIMAVERA",
    ingredients: "Peppers, onion, mushroom, broccoli, mozzarella and olives",
    price: '350ETB',
    photoName: "pizzas/primavera.jpg",
    soldOut: false,
  },
  {
    name: "VEGETARIAN (V)",
    ingredients: "Pizza Sauce, Spinach, Caramelized Onion, Roasted Tomatoes, Eggplant, Broccoli, Mushroom, Sweet Com",
    price: '300ETB',
    photoName: "pizzas/vegetarian.jpg",
    soldOut: false,
  },
  {
    name: "ITALIANO PIZZA (P)",
    ingredients: "Pizza Sauce, Mozzarella & Provolone Cheese, Prosciutto, Salami, Sausage, Olives",
    price: '300ETB',
    photoName: "pizzas/Italiano.jpg",
    soldOut: false,
  },
  {
    name: "SEAFOOD PIZZA",
    ingredients: "Pizza Sauce, Mozzarella & Provolone Cheese, Mixed Seafood , Red Chili",
    price: '310ETB',
    photoName: "pizzas/seafood.jpg",
    soldOut: false,
  },
  {
    name: "CHORIZO AND BACON",
    ingredients: "Sauteed onion, chicken chorizo sausage, crispy bacon, mozzarella",
    price: '400ETB',
    photoName: "pizzas/chorizo.jpg",
    soldOut: false,
  },
  {
    name: "CHICKEN SAUSAGE",
    ingredients: "Margarita With Sausage",
    price: '350ETB',
    photoName: "pizzas/chicken sausage.jpg",
    soldOut: false,
  },
  {
    name: "CHICKEN SALAMI",
    ingredients: "Margarita With Chicken Salami",
    price: '400ETB',
    photoName: "pizzas/chicken salami.jpg",
    soldOut: false,
  },
  {
    name: "CHICKEN PEPPERONI",
    ingredients: "Margarita With Pepperoni",
    price: '350ETB',
    photoName: "pizzas/chicken pepperoni.jpg",
    soldOut: false,
  },
  {
    name: "CHICKEN TIKKA",
    ingredients: "Veggies With Chicken Tikka, Cilantro, mozzarella cheese, mango pickle, onion and green chilli",
    price: '400ETB',
    photoName: "pizzas/chicken tikka.jpg",
    soldOut: false,
  },
  {
    name: "HERB CHICKEN",
    ingredients: "Veggies With Herb Chicken",
    price: '350ETB',
    photoName: "pizzas/herb chicken.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header () {

  const style = {};

  // set open and closed hour
  const hour = new Date().getHours();
  const openHour = 8;
  const closedHour = 22;
  const open = (hour >= openHour && hour <= closedHour);
  console.log(open);

  return (
    <header className="header">
       <h1 style={style}>ETHIOPIAN FAST HUT PIZZA</h1>
    </header>
 
  );
}

function Menu() {

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>PIZZA HUT MENU!</h2>
     
      {numPizzas > 0 ? ( 
        <>
         <p>
        <b> Welcome to Ethiopian Fast Hut Pizza!</b> <br/>
           Craving a slice of something delicious? At Ethiopian Fast Hut Pizza,
           we serve fresh, handcrafted pizzas made with love and the finest ingredients. 
           From classic favorites to bold new flavors, our menu is packed with tasty options 
           for everyone. Fast, flavorful, and always satisfying—your perfect pizza is just a click away!
       </p>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>
      </>
      ) :null }
     
    </main>
  );
}

//use Destructuring props
function Pizza({pizzaObj}) {
  console.log(pizzaObj);


  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
  <footer className="footer">
    {isOpen ? (
      <Order closeHour={closeHour} openHour={openHour}/>
    ) : (
     <p>
      we're happy to welcome you between {openHour}:00. and {closeHour}:00.
      </p>
    )}
     </footer>
     );
       
    
   }
   
function Order({closeHour, openHour}) {
  return (
    <div className="order">
      <p>
        we're open from {openHour}:00 until {closeHour}:00. <br />
        We're happy to welcome you—come and visit us anytime!
      </p>
      <button className="btn"> THANK YOU🙏</button>
    </div>
  )
}


const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);