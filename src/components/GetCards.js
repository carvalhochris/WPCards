import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCards from "./MyCards";
import { Spinner } from "@chakra-ui/react";

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
      {data.length === 0 ? (
        <Spinner
        thickness='2px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      ) : (
        data.map((item) => (
          <div key={item.id}>
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
        ))
      )}
    </div>
  );
}

export default GetCards;
