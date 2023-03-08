import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import AddContact from './AddContact';

function App() {
  return (
    <div>
      <Navbar/>
      <AddContact />
      Hello world!
      <div>
        <button className="btn btn-primary mx-4 mt-5">hire me</button>{" "}
      </div>
    </div>
  );
}

export default App;
