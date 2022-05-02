import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './components/about/about.component';
import Auth from './routes/auth/auth.component';

import './App.css';


const App = () => {
  

 
  return (
   <Routes>
     <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='auth' element={<Auth />} />
     </Route>
   </Routes>
   

  )
};

export default App;
