
import './App.css';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'

import {Createclient} from './pages/create' 
import {Filterclient} from './pages/filter' 
import {Listclient} from './pages/list' 
import {Updateclient} from './pages/uptade' 
import {Toaster} from "react-hot-toast"


import {Nav} from './components/nav'
function App() {
  return (
    <BrowserRouter> 
    <div className='container mx-auto'>
    <Nav />
      
      <Routes>
        <Route path='/' element={<Navigate to ="client/list"/>} />
        
        <Route path='/client/list' Component={Listclient } />
        <Route path='client/create' Component={Createclient } />
        <Route path='client/list/filter' Component={Filterclient } />
        <Route path='/client/list/:id' Component={Updateclient } />
        
      </Routes>
      <Toaster/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
