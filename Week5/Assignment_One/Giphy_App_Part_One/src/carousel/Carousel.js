
import "./Carousel.css";

const Carousel = ({imageSrc, imageAlt}) => {

    return (
        <div className="carousel-wrapper">
            <img src= {imageSrc} alt={imageAlt}/>
        </div>
    )
};

export default Carousel;