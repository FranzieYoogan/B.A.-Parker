import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import About from './About';
import SelectedWork from './SelectedWork';
import Press from './Press';
import Contact from './Contact';

function App() {
  

  return (
    <Router>
        <Header></Header>
        
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/selectedWork" element={<SelectedWork />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact></Contact>}/>
      </Routes>
      
    </Router>
    
  )
}

export default App
