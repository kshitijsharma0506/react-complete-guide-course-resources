import './coreConcepts.css';

export default function CoreConcepts({image,title,description}) { // this is called object destruturing 
    return (
      <li>
        {/* <img src={props.image} alt='...' />
        <h3>{props.title}</h3>
        <p>{props.description}</p> */}
        <img src={image} alt='...' />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }