import React, { useContext } from 'react';
import { Globalcontext } from '../context/Index';
import { Link } from 'react-router-dom';


const Favourate = () => {
  const { loading, favorateitem } = useContext(Globalcontext);

  console.log(favorateitem);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="favourite-container">
      <h1>Favourite</h1>
      <div className="favourite-list">
        {favorateitem?.map((item) => {
          return (
            <div key={item.id} className="favourite-item">
              <h2>{item.publisher}</h2>
              <img src={item.image_url} alt={item.title} />
              <p>{item.title}</p>
              <Link to={`/recipes/${item.id}`} className="view-recipe-link">View Recipe</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourate;
