import React from "react";
import "../pages/HomePage.css";

const HomePage = () => {
  return (
    <main className="main">
      <div className="container">
        <h2 className="title">JORDAN FLEECE</h2>
        <p className="ptitle">
          Reach new heights in the perfect combination of cozy and cool
        </p>
        <img className="headline-img" src="../Assets/Fleece.jpg" alt="Fleece" />
        <h2>Always Iconic</h2>
        <div class="image">
          <img src="../Assets/image1.webp" alt="image1" />
          <img src="../Assets/image2.webp" alt="image2" />
          <img src="../Assets/image3.webp" alt="image3" />
        </div>
        <div className="text1">
          <h3>Air Jordan 1</h3>
          <h3>Air Force 1</h3>
          <h3>Nike Blazer</h3>
        </div>
        <h2>ADD YOUR MAGIC TOUCH</h2>
        <p>
          When all that inspiration goes into your shoe design, anything feels
          possible. Voila!{" "}
        </p>
        <p>
          Try your hand at making that so-you shoe with Nike' co-creation
          service{" "}
        </p>
        <div className="images2">
          <img className="image01" src="../Assets/12.webp" alt="image" />
          <img className="image02" src="../Assets/13.webp" alt="image2" />
        </div>
        <h2>Flex to Your Fullest</h2>
        <div className="images3">
          <img className="image33" src="../Assets/123.webp" alt="123" />
          <img className="image33" src="../Assets/1234.webp" alt="1234" />
          <img className="image33" src="../Assets/12345.webp" alt="1235" />
        </div>

        <br />
      </div>
    </main>
  );
};

export default HomePage;
