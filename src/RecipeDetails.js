import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeDetails = () => {
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch('http://localhost:8000/recipes/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/recipes/' + recipe.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="recipe-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { recipe && (
        <article>
          <h2>{ recipe.title }</h2>
          <p>Poziom trudności: { recipe.level }</p>
          <div>{ recipe.ingredients }</div>
          <div>{ recipe.cooking }</div>
          <button onClick={handleClick}>usunąć</button>
        </article>
      )}
    </div>
  );
}
 
export default RecipeDetails;