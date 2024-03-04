import { useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    let allCourses = [];

    if (category == "All") {
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
    } else {
      return courses[category];
    }

    return allCourses;
  };

  console.log(courses);
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 ">
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            key={course.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
}

export default Cards;
