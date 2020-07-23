import React from "react";
import PropTypes from "prop-types";

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
// propTypes에는 Food 함수의 인자값을 키로 한다.

const foodIlike = [
  {
    id: 1,
    name: "kimchi",
    color: "red",
    rating: 3,
  },
  {
    id: 2,
    name: "pizza",
    color: "yellow",
    rating: 1,
  },
  {
    id: 3,
    name: "tomato",
    color: "red",
    rating: 7,
  },
];

function Food({ fav, color, rating }) {
  return (
    <div>
      <h3>Hello! I LUV {fav}</h3>
      <div>
        <div>
          {fav} color is {color}
        </div>
        <p>my rating = {rating}/10</p>
      </div>
    </div>
  );
}

function Now() {
  return (
    <div>
      {foodIlike.map((food) => (
        <Food
          key={food.id}
          fav={food.name}
          color={food.color}
          rating={food.rating}
        />
      ))}
    </div>
  );
}

export default Now;
