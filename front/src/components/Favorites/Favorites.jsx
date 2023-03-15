import { connect, useDispatch } from "react-redux";
// import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/action";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  function handleFilter(e) {
    dispatch(filterCards(e.target.value));
  }

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        <select name="order" id="" onChange={(e) =>dispatch(orderCards(e.target.value))}>
          <option value='' disabled>Select...</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="gender" id="" onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div>
        {myFavorites?.map(({ name, image }) => (
          <div>
            <h3>{name}</h3>
            <image src={image} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
