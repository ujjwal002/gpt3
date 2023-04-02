import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatgpt3,
  Header,
} from "./containers";
import { Article, Brand, Feature, Navbar, Cta } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
