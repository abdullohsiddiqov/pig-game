import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { Auth } from './components/auth';
import { Main } from './components/main';

const App = () => {
  return (
    <>
     <div>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Auth/>}/>
            <Route path="/games/:gameId" element={<Main/>}/>
          </Routes>
          </BrowserRouter>
     </div>
    </>
  );
};

export default App;