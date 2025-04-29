import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import SelectedWork from './selectedWork';

function App() {
  

  return (
    <Router>
        <Header></Header>
        
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/selectedWork" element={<SelectedWork />} />
        
      </Routes>
      
    </Router>
    
  )
}

export default App
