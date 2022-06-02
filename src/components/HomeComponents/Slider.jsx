import React from "react";
import { Button, Carousel, CarouselItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import HomeBackground from "../../img/Home-background.png";
import "./Slider.scss";

const Slider = () => {
  const strongText = useSelector((state) => state.strongText.strongText);
  return (
    <div className="mt-5">
      {!strongText ? (
        <Carousel>
          <CarouselItem>
            <img
              src={HomeBackground}
              height="509px"
              alt="First slide"
              className="d-block w-100"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
              <h1>Twenty One Pilots</h1>
              <p>22.02.23 в 21:00</p>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button className="rounded-0" variant="light">
                Купить билет
              </Button>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img
              src={HomeBackground}
              height="509px"
              alt="Second slide"
              className="d-block w-100"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
              <h1>Twenty One Pilots</h1>
              <p>22.02.23 в 21:00</p>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button className="rounded-0" variant="light">
                Купить билет
              </Button>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img
              src={HomeBackground}
              height="509px"
              alt="Third slide"
              className="d-block w-100"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
              <h1>Twenty One Pilots</h1>
              <p>22.02.23 в 21:00</p>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button className="rounded-0" variant="light">
                Купить билет
              </Button>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      ) : (
        <Carousel>
          <CarouselItem>
            <img
              src={HomeBackground}
              height="509px"
              alt="First slide"
              className="d-block w-100"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
              <h1 className="fw-bold">Twenty One Pilots</h1>
              <p className="fw-bold">22.02.23 в 21:00</p>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button className="rounded-0 fw-bold" variant="light">
                Купить билет
              </Button>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img
              src={HomeBackground}
              height="509px"
              alt="First slide"
              className="d-block w-100"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
              <h1 className="fw-bold">Twenty One Pilots</h1>
              <p className="fw-bold">22.02.23 в 21:00</p>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button className="rounded-0 fw-bold" variant="light">
                Купить билет
              </Button>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img
              src={HomeBackground}
              height="509px"
              alt="First slide"
              className="d-block w-100"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 carousel-shadow">
              <h1 className="fw-bold">Twenty One Pilots</h1>
              <p className="fw-bold">22.02.23 в 21:00</p>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button className="rounded-0 fw-bold" variant="light">
                Купить билет
              </Button>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      )}
    </div>
  );
};

export default Slider;
