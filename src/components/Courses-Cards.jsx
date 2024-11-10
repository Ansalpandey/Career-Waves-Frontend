// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Courses-Cards.css";

const courses = [
  {
    title: "Responsive Video Website Like Facebook Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum et tempore amet repellat maiores laboriosam distinctio?",
    image: "/course1.jpg", // Ensure this image path is correct
  },

  {
    title: "React for Beginners",
    description:
      "Get started with React, a popular library for building user interfaces.",
    image: "/course1.jpg",
  },
  {
    title: "Mastering HTML & CSS",
    description: "Dive deep into HTML and CSS to build responsive websites.",
    image: "/course1.jpg",
  },
  {
    title: "Introduction to DBMS",
    description:
      "Learn the fundamentals of Database Management Systems (DBMS).",
    image: "/course1.jpg",
  },
  {
    title: "Advanced Java Programming",
    description:
      "Enhance your Java skills with advanced concepts and techniques.",
    image: "/course1.jpg",
  },
  {
    title: "Advanced Java Programming",
    description:
      "Enhance your Java skills with advanced concepts and techniques.",
    image: "/course1.jpg",
  },
  {
    title: "Advanced Java Programming",
    description:
      "Enhance your Java skills with advanced concepts and techniques.",
    image: "/course1.jpg",
  },
  {
    title: "Advanced Java Programming",
    description:
      "Enhance your Java skills with advanced concepts and techniques.",
    image: "/course1.jpg",
  },
  {
    title: "Advanced Java Programming",
    description:
      "Enhance your Java skills with advanced concepts and techniques.",
    image: "/course1.jpg",
  },
  {
    title: "Advanced Java Programming",
    description:
      "Enhance your Java skills with advanced concepts and techniques.",
    image: "/course1.jpg",
  },
];

const CoursesCards = () => {
  return (
    <div className="courses__container">
      {courses.map((course, index) => (
        <article key={index} className="course">
          <div className="course__image">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="course__info">
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <a href="/courses" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CoursesCards;
