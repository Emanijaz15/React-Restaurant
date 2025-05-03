import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const menu=[
    {
      "id": 1,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNBZ4MzsbblFrfjrDHM3VYcJmJoPAFTSWvMCuM_vaBzYauX42gdChNeY1wGdgFcI1x5w&usqp=CAU",
      "name": "Classic Burger",
      "category": "Breakfast",
      "price": 5.99,
      "description": "A juicy beef patty with lettuce, tomato, cheese, and our signature sauce on a soft bun."
    },
    {
      "id": 2,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmomF1DksRYo9MLTC6zi2qx1XjX7R5PSqPYQ&s",
      "name": "Margherita Pizza",
      "category": "Lunch",
      "price": 8.99,
      "description": "Thin crust pizza topped with fresh mozzarella, basil, and tomato sauce."
    },
    {
      "id": 3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKr3uiICA1qEiBgItHWkJt63CNrKCnR2uIg&s",
      "name": "Sushi Roll",
      "category": "Dinner",
      "price": 12.50,
      "description": "A mix of tuna, salmon, avocado, and cucumber rolled in seaweed and rice."
    },
    {
      "id": 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaY11keqJpFFqBSCs0SyYqtXTdwuIKemE4w&s",
      "name": "Spaghetti Carbonara",
      "category": "Evening",
      "price": 10.99,
      "description": "Classic Italian pasta in a creamy sauce made with eggs, cheese, pancetta, and pepper."
    },
    {
      "id": 5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyP5CbhaBkb9gP_T2jwfNzb6ThO32w2kW1g&s",
      "name": "Chicken Tacos",
      "category": "Dinner",
      "price": 7.49,
      "description": "Soft corn tortillas filled with seasoned grilled chicken, fresh salsa, and guacamole."
    },
    {
      "id": 6,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDgBPpL-gJ0Mk0uS936OGF1TzYDZPA92sIQ&s",
      "name": "Grilled Steak",
      "category": "Lunch",
      "price": 18.99,
      "description": "Tender, perfectly grilled steak served with mashed potatoes and vegetables."
    },
    {
      "id": 7,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zzKsmxNQvdw61jTeEoz3kTFZAG055ASulw&s",
      "name": "Caesar Salad",
      "category": "Evening",
      "price": 6.99,
      "description": "Crisp romaine lettuce, parmesan cheese, croutons, and creamy Caesar dressing."
    },
    {
      "id": 8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OXYSt1zt4sJn84O_sDpUvU6GEVlX70KMZg&s",
      "name": "Fried Rice",
      "category": "Lunch",
      "price": 9.49,
      "description": "Stir-fried rice with vegetables, scrambled eggs, and your choice of chicken, shrimp, or pork."
    },
    {
      "id": 9,
      "image": "https://leitesculinaria.com/wp-content/uploads/2016/06/pho-recipe.jpg",
      "name": "Pho",
      "category": "Dinner",
      "price": 11.99,
      "description": "A savory broth with rice noodles, fresh herbs, and your choice of beef or chicken."
    },
    {
      "id": 10,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqO7ZBoWdu00mMfLj2ThpiH6sd3h8bbpahw&s",
      "name": "Beef Burrito",
      "category": "Breakfast",
      "price": 8.49,
      "description": "A large flour tortilla stuffed with seasoned beef, rice, beans, cheese, and sour cream."
    },
    {
      "id": 11,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwYrVcIr4VONXvVcy2wFeBtyH76UucAJ3og&s",
      "name": "Pad Thai",
      "category": "Breakfast",
      "price": 9.99,
      "description": "Stir-fried rice noodles with shrimp, tofu, peanuts, and a tangy tamarind sauce."
    },
    {
      "id": 12,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iX670O6DIeeY3Dgv_MvIojmJIFozsJ4xiQ&s",
      "name": "Grilled Salmon",
      "category": "Dinner",
      "price": 14.99,
      "description": "Fresh salmon grilled to perfection, served with a lemon butter sauce and seasonal veggies."
    },
    {
      "id": 13,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUNGbEtSAaqh9gyws0fdYWdRX__xonXSefw&s",
      "name": "Glazed Donuts",
      "category": "Evening",
      "price": 3.99,
      "description": "Soft and fluffy donuts covered in a sweet, shiny glaze."
    },
    {
      "id": 14,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPDjxBJlk7s44DNHz2D9AJ2f1vBYwXw_Ypw&s",
      "name": "Lasagna",
      "category": "Breakfast",
      "price": 12.99,
      "description": "Layers of pasta, seasoned beef, ricotta cheese, and marinara sauce, baked to perfection."
    },
    {
      "id": 15,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsAQPOVGK_c2idCGSFGBZtvV3xBZSacu1CA&s",
      "name": "Chocolate Ice Cream",
      "category": "Lunch",
      "price": 4.50,
      "description": "Rich and creamy chocolate ice cream made with real cocoa and milk."
    }
  ]

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar menu={menu} onSelectCategory={handleCategorySelect} /> 
      <Cards menu={menu} selectedCategory={selectedCategory} /> 
    </div>
  );
};

export default App;
