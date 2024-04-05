import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import home from './home';
import about from './about';
import contact from './contact';
import setting from './setting';
import help from './help';

function SideBarNavigation() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" exact component={home} />
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
        <Route path="/setting" component={setting} />
        <Route path="/help" component={help} />
      </Routes>
    </BrowserRouter>
  );
}

export default SideBarNavigation;
