import { useState } from 'react';

import Header from "./components/header/header";
import AddContact from "./components/contacts/contact.add";
import ContactsList from "./components/contacts/contacts.list";
import ContactsProvider from "./context/contacts.provider";

function App() {
  const [toggle, setToggle] = useState(false)
  console.log(toggle);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <ContactsProvider>
          <div>
            <button className="btn-add" onClick={() => setToggle(!toggle)}>
              {toggle ? 'Close' : 'Add New User'}
            </button>
            <AddContact toggle={toggle} />
          </div>
          <ContactsList />
        </ContactsProvider>
      </div>
    </div>
  );
}

export default App;
