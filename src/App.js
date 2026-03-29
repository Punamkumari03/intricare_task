import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import './responsive.css';
import { RenderRout } from './router';


function App() {
  return (
    <div className="App">
      <RenderRout />
    </div>
  );
}

export default App;
