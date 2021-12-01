import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Question from "./components/Question";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
