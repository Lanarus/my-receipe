import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map(({ id, title, level }) => (
        <div className="recipe-preview" key={id} >
          <Link to={`/recipes/${id}`}>
            <h2>{ title }</h2>
            <p>Poziom trudności: { level }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default RecipeList;

// buddy