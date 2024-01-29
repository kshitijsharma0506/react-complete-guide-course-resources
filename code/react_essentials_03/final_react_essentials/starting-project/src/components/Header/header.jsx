import reactImg from '../../assets/react-core-concepts.png'
import './header.css'

const reactDescription = ['Fundamental', 'Core', 'Crucial']

function generateRandom(len) {
  return Math.floor(Math.random() * (len));
}

export default function Header() {
    var description = reactDescription[generateRandom(reactDescription.length)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }
  