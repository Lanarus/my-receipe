import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div className="recipe-preview" key={recipe.id} >
          <Link to={`/recipes/${recipe.id}`}>
            <h2>{ recipe.title }</h2>
            <p>Poziom trudności: { recipe.level }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default RecipeList;