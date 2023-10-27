import React, { useState } from 'react';
export default function Dropdown({buttonText, children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <a href="/" onClick={toggleDropdown} className="dropdown-toggle">{buttonText}</a>
      {isOpen && (
        <ul className="dropdown-menu">
          {children}
        </ul>
      )}
    </>
  );
}
 