import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./pages/Layout";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Nopage from './pages/Nopage';
import MyContextProvider from "./pages/MyContextProvider";
import Todo from "./pages/Todo";

function App() {
  return (
    <MyContextProvider>
       <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<Nopage />} />
            <Route path="todo" element={<Todo />} />
          </Route>
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
