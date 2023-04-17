import React from "react";
import Navbar from "../components/navbar/Navbar";
import ImageCarousel from "../../src/components/imageCarousel/ImageCarousel";
import image1 from "../img/migrañapostureo.jpg";
import image2 from "../img/migrañahombre.jpg";
import image3 from "../img/migrañamujer.jpg";
import image4 from "../img/migrañamujer2.jpg";
import Footer from "../components/footer/Footer";
import Curiosities from "../components/curiosities/Curiosities";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      {
        <>
          <ImageCarousel images={[image1, image2, image3, image4]} />
          <Curiosities/>
        </>
      }
      <Footer />
    </div>
  );
}

export default Home;
