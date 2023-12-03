import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 text-4xl font-bold underline cursor-pointer pb-9">
      <div className="logo">LOGO</div>
      <ul className="flex space-x-4 text-4xl font-bold underline cursor-pointer ">
        <li>Projects</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
