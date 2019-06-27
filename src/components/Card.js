import React from 'react';

// can also do de-structuring within the component parameters
const Card = ({id, name, email}) => {

// const { id, name, email } = props;

  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;