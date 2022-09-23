import Navbar from "./components/Navbar";
import appCSS from './App.css'
import Home from "./components/Home";

<link rel="stylesheet" href={appCSS} />
function App() {
  document.querySelector('html').style.backgroundColor = '#dbdbdb';
  return (
    <div>
        <Navbar />
        <Home />
    </div>
  )
}

export default App;
