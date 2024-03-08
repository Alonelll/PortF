import './App.css';
import logo from './images/result.png';

const name = 'Dein Sp\u00E4ti';

const layout = {
    name: name,
    title: 'Willkommen bei ' + name+ ' in Rotenburg',
    description: 'Wir bringen Gro\u00DFstadt nach Rotenburg! S\u00FC\u00DFigkeiten,  Snacks & Getr\u00E4nke aus aller Welt und vieles mehr!',
    image: logo,
    imageSizes: {
        width: 100,
        height: 100
    },
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> {layout.title} </h1>
                <p>
                    {layout.description}
                </p>
                <img src={layout.image} style={layout.imageSizes} alt="logo"/>
                <p>
                    In Here Comes the Layout
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
