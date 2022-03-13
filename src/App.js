import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
let name="Ankit"
function App() {
  return (
   <>
     <Navbar title="myApp1"/> 
     <div className="container my-3"> 
     <TextForm heading = "Enter the text here to analyze below" />
     {/*<About/>*/}
     </div>
   </>
  );
}

export default App;
