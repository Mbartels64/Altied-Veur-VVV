import React from "react";
import { useNavigate } from "react-router-dom";

function Hotnews() {
  let navigate = useNavigate();
  return (
    <div>
      <article>
        <h1>Hot News</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quaerat, sit porro, illum ad saepe ducimus, nam adipisci non labore
          placeat quibusdam commodi atque. Rem facere necessitatibus officia
          dolore aliquam?Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sit architecto adipisci non eos neque consequatur nemo ipsum,
          sequi minima dicta blanditiis quos odio repudiandae fugiat at
          reprehenderit fuga facere? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem quibusdam, eligendi, esse a cumque ea
          quae excepturi consequuntur, optio quas numquam quo id quisquam
          laboriosam! Exercitationem, consequuntur. Voluptates, excepturi
          assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus eligendi nulla eaque eveniet soluta et, atque dolorem
          corporis libero aut ab suscipit id cumque repellat explicabo deserunt
          aliquid, aspernatur maiores. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Cupiditate atque sed nulla ipsum tenetur, id minima
          totam nesciunt ab, accusamus, voluptates omnis culpa? Consequuntur
          minus in perspiciatis maiores, ipsum excepturi. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Optio molestiae facilis ea nulla
          ex. Aliquam vitae, blanditiis corrupti, molestias vel incidunt debitis
          distinctio aspernatur consequuntur odit porro, aperiam ex iste. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat
          officiis libero magni quod consequatur repellat distinctio quasi
          debitis velit, itaque possimus recusandae, aperiam expedita animi
          quidem architecto assumenda excepturi?
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

export default Hotnews;
