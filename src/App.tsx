import './App.css';
import HomePage from './components/homepage';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;