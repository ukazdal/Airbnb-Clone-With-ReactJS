import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <h1>For your next trip</h1>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/0d4ae5be-37d9-400c-917a-de52a034fe4c.jpg?im_w=320"
          title="Italy"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/54582c41-77ef-4f41-aa88-6a4ed0068f4b.jpg?im_w=320"
          title="USA"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/06248faf-fafa-4adb-9447-3a393ca625a4.jpg?im_w=320"
          title="England"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/68ef0c20-321d-42c0-beb4-13bce3e258a2.jpg?im_w=320"
          title="Turkey"
          description="Unique activities we can do together, led by a world of hosts."
        />
      </div>
    </div>
  );
}

export default Home;
