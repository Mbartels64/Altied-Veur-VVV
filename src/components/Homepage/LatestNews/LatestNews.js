import React from "react";
import { useNavigate } from "react-router-dom";

function LatestNews() {
  let navigate = useNavigate();
  return (
    <div>
      <article className="Latestnews-item">
        <h1>Latest News</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
          ipsa pariatur ex dolores voluptas amet corporis, in consequuntur
          laboriosam odit perspiciatis vero suscipit voluptates impedit ipsam,
          dolore adipisci quas. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aperiam commodi voluptas reiciendis vel deserunt
          dolore labore sint soluta voluptatem doloribus fugiat sit maiores cum
          fugit molestiae autem, ipsam nam totam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sint voluptatem nobis expedita
          blanditiis sit veniam quasi ab eum hic placeat neque, magnam accusamus
          recusandae nostrum, illum ea aperiam nesciunt a! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptates recusandae itaque
          delectus vitae animi! Deleniti, optio! Expedita praesentium in magni
          voluptate assumenda labore sunt eveniet maiores enim? Id, sit
        </p>
        <a
          class="button1 bouncy"
          onClick={() => {
            navigate("/news");
          }}
        >
          Read More!
        </a>
      </article>
    </div>
  );
}

export default LatestNews;
