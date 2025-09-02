import {  FooterSection } from "./Components/FooterSection";
import { NavSection } from "./Components/NavSection";
import { Home } from "./Pages/Home";


 const App = () =>{
  return(
    <>
    <div className="!overflow-hidden">
    <NavSection />
    <Home/>
    <FooterSection/>
    </div>
    </>
  )
}

export default App;