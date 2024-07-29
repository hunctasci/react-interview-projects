import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/* Random COlor Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider Component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
    </>
  );
}

export default App;
