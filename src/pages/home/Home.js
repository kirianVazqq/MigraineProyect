import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";

import Footer from "../../components/footer/Footer";
import Curiosities from "../../components/curiosities/Curiosities";
import Infoicon from "../../components/infoicon/Infoicon";

function Home() {
  const image1 = "./images/hombreDolor.jpg";
  const image2 = "./images/mujerDolor.png";
  const image3 = "./images/mujerDolor2.png";
  const image4 = "./images/mujerDolor3.jpeg";
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
