import React from 'react';
import { MenuCategory } from '../types';
import './Menu.css';

const Menu: React.FC = () => {
  const menuCategories: MenuCategory[] = [
    {
      id: 1,
      name: 'Appetizers',
      items: [
        {
          id: 101,
          name: 'Guacamole Fresco',
          description: 'Fresh avocado with lime, onions, tomatoes, and cilantro served with tortilla chips',
          price: '$8.99',
          tags: ['Vegan', 'Gluten-Free'],
        },
        {
          id: 102,
          name: 'Ceviche de Pescado',
          description: 'Fresh fish marinated in lime juice with onions, tomatoes, and cilantro',
          price: '$13.99',
          tags: ['Gluten-Free'],
        },
        {
          id: 103,
          name: 'Queso Fundido',
          description: 'Melted cheese with chorizo served with warm tortillas',
          price: '$10.99',
          tags: [],
        },
        {
          id: 104,
          name: 'Elote Asado',
          description: 'Grilled Mexican street corn with mayo, cheese, chili powder, and lime',
          price: '$5.99',
          tags: ['Vegetarian', 'Gluten-Free'],
        },
      ],
    },
    {
      id: 2,
      name: 'Main Dishes',
      items: [
        {
          id: 201,
          name: 'Tacos al Pastor',
          description: 'Marinated pork with pineapple, onions, and cilantro served on corn tortillas',
          price: '$12.99',
          tags: ['Spicy'],
        },
        {
          id: 202,
          name: 'Enchiladas Verdes',
          description: 'Corn tortillas filled with chicken, covered in green tomatillo sauce and melted cheese',
          price: '$14.99',
          tags: [],
        },
        {
          id: 203,
          name: 'Mole Poblano',
          description: 'Traditional complex sauce with over 20 ingredients served over chicken with rice',
          price: '$16.99',
          tags: [],
        },
        {
          id: 204,
          name: 'Camarones al Ajillo',
          description: 'Sautéed shrimp with garlic, white wine, and herbs served with rice',
          price: '$18.99',
          tags: ['Gluten-Free'],
        },
        {
          id: 205,
          name: 'Chiles Rellenos',
          description: 'Poblano peppers stuffed with cheese, battered and fried, served with tomato sauce',
          price: '$15.99',
          tags: ['Vegetarian'],
        },
      ],
    },
    {
      id: 3,
      name: 'Desserts',
      items: [
        {
          id: 301,
          name: 'Churros con Chocolate',
          description: 'Crispy fried dough sticks dusted with cinnamon sugar served with rich chocolate sauce',
          price: '$6.99',
          tags: ['Vegetarian'],
        },
        {
          id: 302,
          name: 'Flan de Cajeta',
          description: 'Traditional caramel custard topped with goat milk caramel sauce',
          price: '$7.99',
          tags: ['Vegetarian', 'Gluten-Free'],
        },
        {
          id: 303,
          name: 'Tres Leches Cake',
          description: 'Sponge cake soaked in three types of milk and topped with whipped cream',
          price: '$8.99',
          tags: ['Vegetarian'],
        },
      ],
    },
    {
      id: 4,
      name: 'Beverages',
      items: [
        {
          id: 401,
          name: 'Horchata',
          description: 'Traditional rice milk drink with cinnamon and vanilla',
          price: '$4.99',
          tags: ['Vegetarian', 'Gluten-Free'],
        },
        {
          id: 402,
          name: 'Agua de Jamaica',
          description: 'Hibiscus tea served cold with a hint of lime',
          price: '$4.99',
          tags: ['Vegan', 'Gluten-Free'],
        },
        {
          id: 403,
          name: 'Michelada',
          description: 'Beer cocktail with lime juice, assorted sauces, and spices served in a salt-rimmed glass',
          price: '$7.99',
          tags: ['Vegetarian'],
        },
        {
          id: 404,
          name: 'Café de Olla',
          description: 'Traditional Mexican coffee brewed with cinnamon and piloncillo',
          price: '$3.99',
          tags: ['Vegan', 'Gluten-Free'],
        },
      ],
    },
  ];

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Our Menu</h2>
        <p className="section-description">
          Explore our full selection of authentic Mexican dishes, crafted with fresh ingredients and traditional techniques
        </p>

        <div className="menu-categories">
          {menuCategories.map((category) => (
            <div key={category.id} className="menu-category">
              <h3>{category.name}</h3>
              <div className="menu-items">
                {category.items.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="menu-item-header">
                      <h4>{item.name}</h4>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                    <div className="menu-item-tags">
                      {item.tags.map((tag, index) => (
                        <span key={index} className={`tag tag-${tag.toLowerCase().replace(' ', '-')}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;