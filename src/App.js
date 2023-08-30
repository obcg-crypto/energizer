import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Login from './ComponentUI/login';


function App() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Login/>
      break;
    case "/dashboard":
      component = <Dashboard/>
  }

  return (
    <Router>
      <div>
        {component}
      </div>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
