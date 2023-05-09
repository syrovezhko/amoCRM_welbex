import BackGround from "./components/BackGround";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
        <BackGround />
      </div>
      <Footer />
    </div>
  );
}

export default App;
