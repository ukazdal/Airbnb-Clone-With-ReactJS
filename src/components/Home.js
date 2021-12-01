import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import Card2 from "./Card2";
import Question from "./Question";

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
      <div className="exp-h1">
        <h1>Explore Airbnb experiences</h1>
      </div>
      <div className="explore">
        <Card2
          src="https://cdn.pixabay.com/photo/2018/09/30/13/17/forest-3713478_1280.jpg"
          description="A life for fresh air too"
        />
        <Card2
          src="https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Beauty of the sea"
        />
      </div>
      <Question />
    </div>
  );
}

export default Home;
