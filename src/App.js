import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
      id: "1",
      name: "Wale Mustapha",
      email: "walemust@gmail.com",
    },
    {
      id: "2",
      name: "Peter Ogah",
      email: "peterogah@gmail.com",
    },
    {
      id: "3",
      name: "Jenny Mbonu",
      email: "Jenny.mbonu@gmail.com",
    },
  ];
  return (
    <div>
      <Navbar/>
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
