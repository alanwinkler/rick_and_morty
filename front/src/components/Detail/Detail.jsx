import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from '../Detail/Detail.module.css';


const Detail = () => {

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

     return (
        <div className={style.container}>
            <Link to='/home'>
                <button>HOME</button>
            </Link>
            <h2>{character.name}</h2>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            {/* <h3>{character.origin}</h3> */}
            <img className={style.image} src={character.image} alt={character.name} />
        </div>
     )
}

export default Detail;