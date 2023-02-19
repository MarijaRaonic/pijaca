import React from 'react';
import { useState } from 'react';


const Lista = ({namirnice, setNamirnice}) => {

    const obrisi = (idx) => {
        let temp = [...namirnice];
        temp.splice(idx,1);
        setNamirnice([...temp]);
    };

    
  return (
    <div>

    <ul style={{ listStyle: 'none' }}>
                {namirnice.map((namirnica, idx) => {
                    return (

                        <li key={idx} style={{display: 'flex', justifyContent: 'space-between', color: 'black', fontWeight: 'bold'}}>
                            {namirnica}
                            <button style={{backgroundColor: 'grey', marginLeft:'20px'}} onClick={() => { obrisi(idx)}}>X</button>
                        </li>
                    )
                })}
            </ul>


  </div>
  )
};

export default Lista;