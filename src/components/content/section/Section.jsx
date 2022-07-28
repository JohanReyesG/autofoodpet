import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Section.css';
const Section = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://autofoodpet-default-rtdb.firebaseio.com/historicoDispensacion.json')
      .then(res => {
        setData([...data ,res.data]);
      })
      .catch(err => console.log(err));
  }
    , []);
  return (  
    <div className='section'>
      <ul class="sessions">
        {data.map(item => (
          <li>
            <div class="time">{item.fechaHora}</div>
            <p>Se dispensaron {item.gramosDispensados} gramos</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Section;