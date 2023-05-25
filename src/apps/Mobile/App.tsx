import { BrowserRouter, Link } from 'react-router-dom';
import IRoute from './router';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Mobile App component</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
      <IRoute />
    </BrowserRouter>
  )
}

export default App