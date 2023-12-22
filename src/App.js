import About from "./Components/About";
import Line from "./Components/Line";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Who from "./Components/Who";



function App() {
  return (
    <div id="home">
     <Navbar/>

     <About/>

    <Line />

     <Who/>

     <Line />

     <Projects/>

     <Line/>
    
    </div>
  );
}

export default App;
