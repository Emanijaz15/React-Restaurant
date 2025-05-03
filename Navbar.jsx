import React from 'react';
import { motion } from 'motion/react';

const Navbar = ({ menu, onSelectCategory }) => {
  const categories = [...new Set(menu.map((elem) => elem.category))];

  return (
    <div className="w-full flex justify-center flex-start mb-4">
      <div className="flex justify-between items-center rounded-3xl mt-9 bg-white lg:mx-12 lg:w-1/2 mx-7">
       
        <motion.h1
          key="all"
          className="bg-white text-black lg:text-xl cursor-pointer lg:px-6 lg:py-4 lg:rounded-2xl rounded py-2 px-4 text-sm"
          whileHover={{
            textDecoration: 'underline',
            textDecorationColor: 'red',
            textDecorationThickness: '2px',
            textDecorationOffset: '14px',
            transition: { duration: 0.2 },
            scale: 0.8,
          }}
          onClick={() => onSelectCategory('All')}
        >
          All
        </motion.h1>
        {categories.map((uniqueCategory, idx) => (
          <motion.h1
            key={idx}
            className="bg-white text-black lg:text-xl cursor-pointer lg:px-6 lg:py-4 lg:rounded-2xl rounded py-2 px-4 text-sm"
            whileHover={{
              textDecoration: 'underline',
              textDecorationColor: 'red',
              textDecorationThickness: '2px',
              textDecorationOffset: '14px',
              transition: { duration: 0.2 },
              scale: 0.8,
            }}
            onClick={() => onSelectCategory(uniqueCategory)} 
          >
            {uniqueCategory}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
