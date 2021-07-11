import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GettingStarted from './gettingStarted';
import Header from './header';
import HeroSection from './heroSection';
import Nav from './nav';
import Gifts from './gifts';
import Footer from './footer';
import ConfirmationDialog from './confirmation';
function App() {
  const [isDialogOpen, setIsDialogOpen]=useState(false);
  const [isDialog2Open, setIsDialog2Open]=useState(false);
  return (
    <BrowserRouter>
      <div className="font-sans static inset-x-0">
        <ConfirmationDialog isOpen={isDialogOpen} onClose={setIsDialogOpen} description="Do you really want to delete these records? This process cannot be undone."/>
        <ConfirmationDialog isOpen={isDialog2Open} onClose={setIsDialog2Open} description="Do you really want to delete these records? This process cannot be undone." title='Second Confirmation' okButtonText='Accept' cancelButtonText='Decline'/>
        <button className='bg-primary-200 p-2 mx-5 rounded-sm' onClick={()=>setIsDialogOpen((open)=>!open)
        }>Confirmation Dialog 1</button>
        <button className='bg-primary-200 p-2 mx-5 rounded-sm' onClick={()=>setIsDialog2Open((open)=>!open)
        }>Confirmation Dialog 2</button>
        <Nav />
        <Switch>
          <Route path='/rewards'>
          <Header />
          <HeroSection />
          <GettingStarted />
          </Route>
          <Route path='/gifts'>
            <Gifts />
          </Route>
        </Switch>
        <Footer />
        
      </div>
      
    </BrowserRouter>

  );
}

export default App;
