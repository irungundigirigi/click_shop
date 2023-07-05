import Header from './Header';
import Home from './Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}
