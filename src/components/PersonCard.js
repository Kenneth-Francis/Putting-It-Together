import {useState} from 'react'

const PersonCard = (props) => {

  const {firstName, lastName, age, hairColor} = props;

  const [state, setState] = useState({
    age: age
  });

  const handleClick = () => {
    setState({
      age: state.age + 1
    });
  }

  return (
    <div className="card shadow mb-4 mx-auto" style={{width: "24rem"}}>
      <div className="card-header">
        <h1 className="text-start text-primary">{lastName}, {firstName}</h1>
      </div>
      <div class="card-body d-flex flex-column align-items-start">
        <h5>Age: {state.age}</h5>
        <h5>Hair Color:  <span className={`${hairColor}`}>{hairColor}</span></h5> 
      </div>
      <div className="card-footer">
        <button className="btn btn-info"onClick={handleClick}>
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    </div>
  )
}

export default PersonCard;