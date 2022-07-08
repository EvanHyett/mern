

const PersonCard = (props) => {
    let {firstName, lastName, age, hairColor} = props;
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;