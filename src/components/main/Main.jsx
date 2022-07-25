import React from 'react';
import Aside from '../content/aside/Aside';
import Section from '../content/section/Section';
import './Main.css';
const Main = () => (
  <div className='main'>
 
    <div className='wrapper'>
      <Aside />
      <Section />
    </div>
  </div>
)
export default Main;