import React from 'react';
import './Aside.css';
const Aside = () => (
  <div className='aside'>
    <nav className='aside__nav'>
    <h2>
      Bienvenido al panel de alimentación de tu mascota

    </h2>
      <ul className='aside__nav__list'>
        <li className='aside__nav__list__item'>
          <button className='aside__nav__list__item__button'>
            Dispensar manualmente
          </button>
        </li>
        <li className='aside__nav__list__item'>
          <button className='aside__nav__list__item__button'>
            Histórico de alimentación
          </button>
        </li>
        <li className='aside__nav__list__item'>
          <button className='aside__nav__list__item__button'>
            Configurar Dispensador Automático
          </button>
        </li>
      </ul>
    </nav>
  </div>
)
export default Aside;