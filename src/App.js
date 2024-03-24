
import Navbar from './components/Navbar/Navbar';
import './index.scss'
import './layout.scss'
import Homepage from './routes/homepage/Homepage';

function App() {
  return (
    <div className="Layout">
      <div className='container1'>
      <Navbar/>
      </div>
      <div className='container2'>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
