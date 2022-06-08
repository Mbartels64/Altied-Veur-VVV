import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "../Homepage.css";

function Hotnews() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Most Populair News Items</h1>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://media.gettyimages.com/photos/georgios-giakoumakis-of-vvv-venlo-celebrates-during-the-dutch-match-picture-id1230569803?k=20&m=1230569803&s=612x612&w=0&h=o0axDpxdehvf_wFt-5flB8oApAxMuaCzu7d_Q89XDRI="
          />
          <Card.Body>
            <Card.Title className="CardTitle">
              VVV trekt nieuwe speler aan!
            </Card.Title>
            <Card.Text className="CardClass">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              eveniet facere dicta aspernatur aliquam id quas, corporis est! A
              qui, praesentium ipsam vitae perspiciatis impedit similique ab?
              Harum, impedit sed. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptatem eaque voluptatibus esse atque nobis
              quisquam hic molestiae architecto, quam, soluta blanditiis ea vel
              minus sint vitae inventore et? Unde, praesentium?
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://media.gettyimages.com/photos/thorsten-kirschbaum-of-vvv-venlo-georgios-giakoumakis-of-vvv-venlo-picture-id1232865974?k=20&m=1232865974&s=612x612&w=0&h=ULBNkjKsoUE4H0EBl3GLSkdSqsExVDbfeWCxLpQ5uD8="
          />
          <Card.Body>
            <Card.Title className="CardTitle">Venlonaren Bedankt!</Card.Title>
            <Card.Text className="CardClass">
              This card has supporting text below as a natural lead-in to
              additional contentThis card has supporting text below as a natural
              lead-in to additional contentThis card has supporting text below
              as a natural lead-in to additional contentThis card has supporting
              text below as a natural lead-in to additional content
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://media.gettyimages.com/photos/supporters-of-vvv-venlo-during-the-dutch-eredivisie-match-between-de-picture-id1138336147?k=20&m=1138336147&s=612x612&w=0&h=o6g2AXJl2IyYj7eWEy_Q_wtL5nMFRnyUknonuXzZQhc="
          />
          <Card.Body>
            <Card.Title className="CardTitle">Seizoens afsluiter</Card.Title>
            <Card.Text className="CardClass">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action. This is a wider
              card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show
              that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Hotnews;
