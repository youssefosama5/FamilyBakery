// import photo1 from "./images/1.jpg"
// import photo2 from "./images/2.jpg"
// import photo3 from "./images/3.jpeg"
//  const images = [photo1, photo2, photo3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };
//   return (
//     <>
//     <h2>Why Choose Dream Cinema</h2>
//   <div className="why-us" id="About">
//     <div className="content">
  
//       <p>🎬 At our cinema, we believe that watching a movie should be more than just a simple outing. it should be an unforgettable experience. From the moment you step into our doors, you are welcomed into a world of comfort, excitement, and entertainment. We carefully select the latest blockbusters and critically acclaimed films to ensure there is always something for everyone. Our state-of-the-art sound systems and high-definition screens create a fully immersive environment that brings every story to life. Whether you come alone, with friends, or with family, we aim to make every visit memorable, combining top-notch facilities with excellent customer service. Choosing us means choosing quality, convenience, and a touch of magic in every movie night.
// </p>
//       <ul>
//         <li><i className="fa-solid fa-circle-check"></i> Crystal-clear screens and powerful sound systems.</li>
//         <li><i className="fa-solid fa-circle-check"></i> Wide selection of movies for all tastes. </li>
//         <li><i className="fa-solid fa-circle-check"></i> Comfortable seating designed for your relaxation.  </li>
//         <li><i className="fa-solid fa-circle-check"></i> Easy and fast online booking system. </li>
//         <li><i className="fa-solid fa-circle-check"></i> Friendly staff and welcoming atmosphere. </li>
//         <li><i className="fa-solid fa-circle-check"></i> Affordable ticket prices with great offers. </li>
//       </ul>
//     </div>

//     <div className="image-box">
//       <img src={images[currentIndex]} alt="background" />
//        <button className="arrowLeft" onClick={prevSlide}>&#10094;</button>
//           <button className="arrowRight" onClick={nextSlide}>&#10095;</button>
//       <div className="indicators">
//   {/* <span onClick={() => goToSlide(0)} className={`dot ${currentIndex===0 ? "active" : ""}`}></span>
//   <span onClick={() => goToSlide(1)} className={`dot ${currentIndex===1 ? "active" : ""}`}></span>
//   <span onClick={() => goToSlide(2)} className={`dot ${currentIndex===2 ? "active" : ""}`}></span> */}
//   <span onClick={() => goToSlide(0)} className={"dot " + (currentIndex===0 ? "active":"")} > </span>
//   <span onClick={() => goToSlide(1)} className={"dot " + (currentIndex===1 ? "active":"")} > </span>
//   <span onClick={() => goToSlide(2)} className={"dot " + (currentIndex===2 ? "active":"")} > </span>
//       </div>
//       </div>
//  </div>
//     </>
//   );

const images = [
    "./images/1.jpeg",
    "./images/2.jpeg",
    "./images/3.jpeg"
];

const sliderImage = document.getElementById("sliderImage");

const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function updateSlider() {
    sliderImage.src = images[currentIndex];

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

arrowLeft.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateSlider();
});

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        currentIndex = Number(dot.dataset.index);
        updateSlider();
    });
});

