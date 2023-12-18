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
          </Routes>
          <Routes>
            <Route path="/game" element={<Main/>}/>
          </Routes>
          </BrowserRouter>
     </div>
    </>
  );
};

export default App;