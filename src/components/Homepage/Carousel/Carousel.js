import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselBlock() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 h-50 p-5"
            src="https://media.gettyimages.com/photos/georgios-giakoumakis-of-vvv-venlo-celebrates-during-the-dutch-match-picture-id1230569803?k=20&m=1230569803&s=612x612&w=0&h=o0axDpxdehvf_wFt-5flB8oApAxMuaCzu7d_Q89XDRI="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 h-50 p-5"
            src="https://media.gettyimages.com/photos/thorsten-kirschbaum-of-vvv-venlo-georgios-giakoumakis-of-vvv-venlo-picture-id1232865974?k=20&m=1232865974&s=612x612&w=0&h=ULBNkjKsoUE4H0EBl3GLSkdSqsExVDbfeWCxLpQ5uD8="
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 h-50 p-5"
            src="https://media.gettyimages.com/photos/supporters-of-vvv-venlo-during-the-dutch-eredivisie-match-between-de-picture-id1138336147?k=20&m=1138336147&s=612x612&w=0&h=o6g2AXJl2IyYj7eWEy_Q_wtL5nMFRnyUknonuXzZQhc="
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBlock;
