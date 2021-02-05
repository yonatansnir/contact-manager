import { useState } from 'react';

import Header from "./components/header/header";
import AddPerson from "./components/persons/person.add";
import PersonsList from "./components/persons/persons.list";
import PersonProvider from "./context/person.provider";

function App() {
  const [toggle, setToggle] = useState(false)
  console.log(toggle);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <PersonProvider>
          <div>
            <button className="btn-add" onClick={() => setToggle(!toggle)}>
              {toggle ? 'Close' : 'Add New User'}
            </button>
            <AddPerson toggle={toggle} />
          </div>
          <PersonsList />
        </PersonProvider>
      </div>
    </div>
  );
}

export default App;
