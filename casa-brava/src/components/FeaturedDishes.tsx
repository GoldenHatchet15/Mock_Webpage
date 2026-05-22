import React, { useState } from 'react';
import type { Dish } from '../types';
import './FeaturedDishes.css';

const FeaturedDishes: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const dishes: Dish[] = [
    {
      id: 1,
      name: 'Tacos al Pastor',
      description: 'Marinated pork with pineapple, onions, and cilantro served on corn tortillas',
      price: '$12.99',
      category: 'Main Dishes',
      tags: ['Spicy'],
    },
    {
      id: 2,
      name: 'Guacamole Fresco',
      description: 'Fresh avocado with lime, onions, tomatoes, and cilantro served with tortilla chips',
      price: '$8.99',
      category: 'Appetizers',
      tags: ['Vegan', 'Gluten-Free'],
    },
    {
      id: 3,
      name: 'Enchiladas Verdes',
      description: 'Corn tortillas filled with chicken, covered in green tomatillo sauce and melted cheese',
      price: '$14.99',
      category: 'Main Dishes',
      tags: [],
    },
    {
      id: 4,
      name: 'Churros con Chocolate',
      description: 'Crispy fried dough sticks dusted with cinnamon sugar served with rich chocolate sauce',
      price: '$6.99',
      category: 'Desserts',
      tags: ['Vegetarian'],
    },
    {
      id: 5,
      name: 'Ceviche de Pescado',
      description: 'Fresh fish marinated in lime juice with onions, tomatoes, and cilantro',
      price: '$13.99',
      category: 'Appetizers',
      tags: ['Gluten-Free'],
    },
    {
      id: 6,
      name: 'Mole Poblano',
      description: 'Traditional complex sauce with over 20 ingredients served over chicken with rice',
      price: '$16.99',
      category: 'Main Dishes',
      tags: [],
    },
  ];

  const categories = ['All', 'Appetizers', 'Main Dishes', 'Desserts', 'Drinks'];

  const filteredDishes = activeCategory === 'All'
    ? dishes
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <section id="featured-dishes" className="featured-dishes">
      <div className="container">
        <h2>Featured Dishes</h2>
        <p className="section-description">
          Discover our most popular dishes, crafted with authentic ingredients and traditional techniques
        </p>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="dishes-grid">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <div className="dish-image">
                <div className="image-placeholder">
                  <span className="dish-initial">{dish.name.charAt(0)}</span>
                </div>
              </div>
              <div className="dish-content">
                <div className="dish-header">
                  <h3>{dish.name}</h3>
                  <span className="dish-price">{dish.price}</span>
                </div>
                <p className="dish-description">{dish.description}</p>
                <div className="dish-tags">
                  {dish.tags.map((tag, index) => (
                    <span key={index} className={`tag tag-${tag.toLowerCase().replace(' ', '-')}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;