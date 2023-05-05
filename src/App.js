import './App.css';

let name= "harry";

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>This is {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perferendis autem quia laborum nemo, aliquid reiciendis consequatur, vero ullam ducimus consequuntur maxime facilis sed!
           Esse numquam labore molestias explicabo quam ipsa?</p>
      </div>
    </>
  );
}
export default App;
