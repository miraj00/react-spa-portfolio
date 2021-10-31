import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div>
            <Header/>

            <Nav /> 
      <main>
            <About></About>
            <ContactForm></ContactForm>
      </main>

          
             <Footer/>
    </div>
  );
}

export default App;
