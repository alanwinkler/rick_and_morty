import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../../redux/actions/action";
import { useState, useEffect } from "react";
import { connect } from "react-redux";


function Card({
  name,
  gender,
  onClose,
  species,
  image,
  detailId,
  addFavorite,
  deleteFavorite,
  myFavorites
}) {
   console.log(myFavorites);
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav === true) {
      setIsFav(false);
      deleteFavorite(detailId);
    }
    if (isFav === false) {
      setIsFav(true);
      addFavorite({name, gender, species, detailId});
    }
  }

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === detailId) {
         setIsFav(true);
      }
   });
}, [detailId, myFavorites]);

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.closeButton} onClick={onClose}>
        X
      </button>
      <Link to={`/detail/${detailId}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <h2 className={style.species}>{species}</h2>
      <h2 className={style.gender}>{gender}</h2>
      <img className={style.imagen} src={image} alt={name} />
    </div>
  );
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   }
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
