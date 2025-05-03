import React from 'react';
import { motion } from 'motion/react';

const Cards = ({ menu, selectedCategory }) => {
  const filteredMenu = selectedCategory === 'All'
    ? menu
    : menu.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-wrap justify-center">
      {filteredMenu.map((elem) => (
        <motion.div
          key={elem.id}
          whileHover={{
            transition: { duration: 0.1 },
            scale: 0.95
          }}
          className="bg-white lg:h-76 lg:w-[340px] lg:py-7 lg:px-5 lg:m-5 m-2 md:m-4 cursor-pointer py-3 px-3 w-[280px] rounded-xl shadow-lg"
        >
          <div className="w-8 text-gray-400 h-8 border-2 border-gray-400 rounded-full flex justify-center items-center">
            {elem.id}
          </div>
          <h2 className="font-serif text-gray-400 py-2 lg:text-xl text-sm">{elem.category}</h2>
          <h1 className="font-serif text-black lg:text-3xl text-xl py-2">{elem.name}</h1>
          <h1 className="font-serif text-black text-3xl py-2">{elem.price}$</h1>
          <h2 className="font-serif text-gray-400 py-2">{elem.description}</h2>
          <div className="border-t-2 border-gray-400 w-full py-4"></div>
          <div className="flex justify-center items-center flex-col">
            <img className="h-60 w-68 pb-4" src={elem.image} alt={elem.name} />
            <button className="border-2 border-gray-400 p-1 text-gray-400">Order Now</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
