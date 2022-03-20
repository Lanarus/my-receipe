import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cooking, setCooking] = useState('');
  const [level, setLevel] = useState('łatwy');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipes = { title, ingredients, cooking, level };

    fetch('http://localhost:8000/recipes/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipes)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Dodaj nowy przepis</h2>
      <form onSubmit={handleSubmit}>
        <label>Nazwa posilku:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Skladniki:</label>
        <textarea
          required
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        <label>Przygotowanie:</label>
        <textarea
          required
          value={cooking}
          onChange={(e) => setCooking(e.target.value)}
        ></textarea>
        <label>Poziom trudności:</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="łatwy">Łatwy</option>
          <option value="średni">Średni</option>
          <option value="trudny">Trudny</option>
        </select>
        <button>Dodaj przepis</button>
      </form>
    </div>
  );
}
 
export default Create;