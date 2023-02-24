import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCards from "./MyCards";

function GetCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://unlockyoursound.com/wp-json/wp/v2/posts?categories=322")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {/* <h2>{item.title}</h2>
          <p>{item.body}</p> */}
          <MyCards
            title={item.title.rendered}
            content={item.content.rendered}
            slug={item.slug}
            img={
              item.yoast_head_json.og_image &&
              item.yoast_head_json.og_image[0].url
            }
          />
        </div>
      ))}
    </div>
  );
}

export default GetCards;
