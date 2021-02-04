import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Background from "./components/Background";
import Info from "./components/Info";
import Rsvpsection from "./components/Rsvpsection";
import Rsvpmodal from "./components/Rsvpmodal";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Background></Background>
      <Info></Info>
      <Rsvpsection></Rsvpsection>
      <Rsvpmodal></Rsvpmodal>
      <Footer></Footer>
    </>
  );
}

export default App;
