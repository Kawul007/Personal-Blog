import React,{useState} from 'react';
import ActiveSection from '../components/ActiveSection';
import DetailsSection from '../components/DetailsSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TechTools from '../components/TechTools';
import Notes from '../components/Notes';
import Footer from '../components/Footer';

const Home = () => {

const [isOpen,setIsOpen] = useState(false);
const toggle = () =>{
    setIsOpen(!isOpen)
}

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <ActiveSection />
        <DetailsSection />
        <TechTools/>
        <Notes />
        <Footer />
    </div>
  )
}

export default Home