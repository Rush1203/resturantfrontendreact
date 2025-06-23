import pizzaImg from '../assets/images/pizza.jpg';
import burgerImg from '../assets/images/pizza.jpg';
import pastaImg from '../assets/images/pizza.jpg';
import saladImg from '../assets/images/pizza.jpg';



const menuItems = [
  { name: "Pizza", price: "$10", image: pizzaImg },
  { name: "Burger", price: "$7", image: burgerImg },
  { name: "Pasta", price: "$9", image: pastaImg },
  { name: "Salad", price: "$5", image: saladImg },
];

export default function Menu() {
  return (
    <section id="menu" className="py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-6">Our Menu</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {menuItems.map((item, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h4 className="text-xl font-semibold">{item.name}</h4>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
