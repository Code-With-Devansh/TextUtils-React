import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea';

function App(){
  return (
    <>
      <Navbar/>
      <div className="container my-3">
        <h3>Please enter your text below...</h3>
        <TextArea/>
        
      </div>
    </>
  );
}
export default App;