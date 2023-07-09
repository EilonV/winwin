import { Route, Routes } from 'react-router-dom'
import { Home } from "./pages/home";
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Intro } from './pages/intro';
import { Tests } from './pages/tests';
import { Successful } from './pages/successful-register';
import { Loader } from './pages/loader';
import { Profile } from './pages/profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Loader />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/intro' element={<Intro />} />
      <Route path='/test' element={<Tests />} />
      <Route path='/success' element={<Successful />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App;
