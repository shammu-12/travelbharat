import { Link } from "react-router-dom";


function StateCard({state}){

  return(

    <div className="card">


      <div className="card-image">

        <img
          src={state.image}
          alt={state.name}
        />


        <div className="image-overlay">

          <h2>
            {state.name}
          </h2>

        </div>


      </div>



      <div className="card-content">


        <p>
          🏛 Capital: {state.capital}
        </p>


        <p>
          🗣 Language: {state.language}
        </p>


        <Link to={`/states/${state.id}`}>

          <button>
            Explore {state.name}
          </button>

        </Link>


      </div>


    </div>

  );

}


export default StateCard;