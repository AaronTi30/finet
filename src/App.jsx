import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="container">
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>About</section>
      <section>Speaker</section>
      <section>Portfolio1</section>
      <section>Testamonial</section>
      <section>Contact</section > 
    </div>
  );
};

export default App;
