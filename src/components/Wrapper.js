import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './content/Home';
import ConstructorPage from './constructor/ConstructorPage';
import PageTwo from './content/PageTwo';
import PageThree from './content/PageThree';
import NotFound from './content/NotFound';

import ThemaSwitcher from './themeswitcher/ThemaSwitcher'

const Wrapper = () => {
  const [theme, setTheme] = useState('first');
  return (
    <>
      <ThemaSwitcher handlerTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home theme={theme}/>} />
          <Route path="constructor" element={<ConstructorPage />} />
          <Route path="pageTwo" element={<PageTwo />} />
          <Route path="pageThree" element={<PageThree />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Wrapper;
