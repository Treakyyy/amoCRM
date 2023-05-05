import './App.css';
import Background from './background/Background';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Background/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
