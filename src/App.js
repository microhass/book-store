import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import Error from './components/Error';
import BooksCategory from './components/BooksCategory';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path='home' element={<Home />} />
        <Route index path='/category' element={<BooksCategory />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
