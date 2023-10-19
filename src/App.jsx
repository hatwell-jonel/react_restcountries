import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from './pages/Countries';
import CountryDetails from './pages/CountryDetails';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Countries />} />
        <Route path="/:name" exact element={<CountryDetails />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

