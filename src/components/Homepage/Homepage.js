import React from "react";
import LatestNews from "./LatestNews/LatestNews";
import Hotnews from "./Hotnews/Hotnews";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Homepage() {
  return (
    <>
      <div>
        <Container className="mt-4">
          <Row>
            <Col lg={true} className="mb-4">
              <LatestNews />
            </Col>
            <Col lg={true} className="mb-4">
              <Hotnews />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Forum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                veniam magnam velit doloremque voluptatem, sequi quis veritatis
                blanditiis est eaque dolorem, consequuntur dolore temporibus
                quam sapiente amet, in molestias corrupti? Delectus rerum nulla
                sequi vitae esse enim culpa perspiciatis cum similique ad odit,
                libero perferendis ut labore. Quod quidem dolor quasi provident
                consectetur nesciunt iure, reprehenderit laudantium blanditiis
                suscipit officia. Omnis cumque, rerum deserunt perspiciatis
                explicabo modi recusandae nesciunt, soluta obcaecati asperiores
                error cupiditate qui architecto rem quaerat at est repellat enim
                ea et, aliquid officia non. Nihil, inventore enim? Ex incidunt
                ducimus maiores alias error nulla earum recusandae, nihil
                dignissimos molestias, optio odit, officia nesciunt dolore ad
                qui sed enim? Eligendi itaque debitis nostrum cum aspernatur et
                hic doloribus? Iusto sint soluta ipsa facilis dolorem excepturi
                eius molestiae itaque harum, ea officiis? Soluta praesentium
                quibusdam autem? Harum
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Homepage;
