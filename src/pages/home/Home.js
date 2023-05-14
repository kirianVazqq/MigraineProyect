import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import image1 from "../../img/hombreDolor.jpg";
import image2 from "../../img/mujerDolor.png";
import image3 from "../../img/mujerDolor2.png";
import image4 from "../../img/mujerDolor3.jpeg";
import Footer from "../../components/footer/Footer";
import Curiosities from "../../components/curiosities/Curiosities";
import Infoicon from "../../components/infoicon/Infoicon";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      {
        <>
          <ImageCarousel images={[image1, image2, image3, image4]} />
          <Infoicon />
          <Curiosities />
        </>
      }
      <Footer />
    </div>
  );
}

export default Home;
