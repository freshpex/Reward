import { Routes, Route } from 'react-router-dom';
import Home from './app/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
