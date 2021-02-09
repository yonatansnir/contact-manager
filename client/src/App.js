import Header from "./components/header/header";
import ContactsProvider from "./context/contacts.provider";
import { Link, Route, Switch } from 'react-router-dom';
import Main from './pages/main/main';
import EditPage from "./pages/edit/edit";
import Log from "./pages/log/log";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/log">Log</Link>
      </div>
      <ContactsProvider>
        <Switch>
          <Route path="/edit/:id" component={EditPage} />
          <Route path="/log" component={Log} />
          <Route path="/" component={Main} />
        </Switch>
      </ContactsProvider>
    </div>
  );
}

export default App;
