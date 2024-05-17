import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './pagestyles.css'

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://localhost:1500/menu');
      setMenuItems(response.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="centered">
        <div className='menu-container'>
      <h1>Menu</h1>
      <table className="menu-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Picture</th>
    </tr>
  </thead>
  <tbody>
    {menuItems.map((menuItem) => {
      const imageData = new Uint8Array(menuItem.picture.data.data);
      const binary = imageData.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
      const imageSrc = `data:${menuItem.picture.contentType};base64,${btoa(binary)}`;

      return (
        <tr key={menuItem._id}>
          <td>{menuItem.name}</td>
          <td>{menuItem.price}</td>
          <td>
            <img
              src={imageSrc}
              alt="Menu Item"
              className="menu-item-image"
            />
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
</div>
    </div>
  );
};

export default Menu;
