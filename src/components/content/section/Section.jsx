import React from 'react';
import './Section.css';
const data = [
  {
    date: '25-07-2022 07:00 AM',
    title: 'comida dispensada, restante: 1900gr',
  },

  {
    date: '25-07-2022 12:00 PM',
    title: 'comida dispensada, restante: 1000gr',
  }, {
    date: '25-07-2022 05:00 PM',
    title: 'comida dispensada, restante: 200gr',
  },

]
const Section = () => (
  <div className='section'>
    <ul class="sessions">
      {data.map(item => (
        <li>
          <div class="time">{item.date}</div>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  </div>
)
export default Section;