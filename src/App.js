// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Register from './components/Register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignup/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <Switch>
    //     <Route exact path='/' component={LoginSignup}/>
    //     <Route path='/register' component={Register}/>
    //     <Route/>
    //   </Switch>
    // </Router>
  );
}

export default App;
