
import './App.css';

//imagenes
import logo from "./Assets/uao-virtual.svg";
import img1 from "./Assets/ironman.jpg"
import img2 from "./Assets/IronMan5.jpg";

//components
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Comic from "./Components/Comics";

function App() {
  const array = ["comic1" , "comic2", "comic3"];
  return (
    <div className="App">
      <Navbar img={logo}/>
      <Banner
        img={img1}
        imgname="portada Ironman"
        img2={img2}
        imgname2="comic Ironman"
        title="Lorem ipsum"
        body='"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."'
        />
        
      <div className="Comics">
        {array.map((ele, i) => (
          <Comic key={i} img={img2} name={ele}/>
        ))}

      </div>

    </div>
  );
}

export default App;
