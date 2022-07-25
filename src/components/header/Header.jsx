import React from 'react';
import './Header.css';
import logoUrl from '../../logo.png';
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="AutoFoodPet" />
    <span>
    AutoFoodPet
    </span>
  </div>
)
export default Header;