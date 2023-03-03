import { connect } from "react-redux";

// const Favorites = ({myFavorites}) =>{
//     return (
//         <div>{
//             // myFavorites.map((character) => )}
//         </div>
        
//     )
// }

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites);