import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

<Navbar title="Fire" aboutText="About Us"/>
<div className="container">
<TextForm heading ="Enter to analyze"/>
</div>

    </>
  );
}

export default App;
