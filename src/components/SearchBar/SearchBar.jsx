import { useState } from "react";
import style from './SearchBar.module.css';

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('');

   const handleChange = (event)=>{
      setCharacter(event.target.value)
   };

   return (
      <div className={style.container}>
          <input className={style.input} type='search' value={character} onChange={handleChange} />
          <button className={style.buttonAgregar} onClick={()=> onSearch(character)}>Agregar</button>
          {/* Acá es un callback porque se tiene que ejecutar */}
      </div>
   );
}

export default SearchBar;
