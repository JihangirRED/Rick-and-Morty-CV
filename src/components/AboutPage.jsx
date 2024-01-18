import React from "react";
import img2 from "./img/photo_2024-01-18_16-06-05.jpg";
// import img2 from "./img/photo_2024-01-12_16-04-18  001.jpg";
// import img3 from "./img/photo_2024-01-12_16-04-18 002.jpg";
const AboutPage = () => {
  return (
    <div>
      <div class="hero">
        <div class="hero__container">
          <div class="hero__about">
            <h1>Мини резюме</h1>
            <h2 class="hero__title">Frontend-разработчик</h2>
            <h3 class="hero__subtitle">Адилет Баимбеков</h3>
            <div className="about-me">
              <p class="hero__description">
                Привет, я учусь в школе IT Makers и в будущем стану Frontend
                разработчиком. Любимая цытата: «Мечты так и остаются мечтами,
                если к ним не идти». Любимый фильм: "Большой Куш". Любимое
                блюдо: "Пять пальцев". Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Mollitia, molestiae ex nisi dolor fuga, quos
                aliquid sit in, id magni sapiente nobis reiciendis perspiciatis
                placeat maiores tempora debitis natus. Exercitationem.
              </p>
            </div>
          </div>
          <div class="hero__box">
            <img class="box-img" src={img2} alt="" />
            {/* <img class="box-img" src={img2} alt="" />
            <img class="box-img" src={img3} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
