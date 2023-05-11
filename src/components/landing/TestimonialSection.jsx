import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Until I feared I would lose it, I never loved to read. One does not love breathing.",
      user: "Harper Lee",
      image: "/images/testimonials/harper-lee.jpg",
    },
    {
      id: 2,
      text: "Make it a rule never to give a child a book you would not read yourself.",
      user: "George Bernard Shaw",
      image: "/images/testimonials/george-bernard-shaw.jpg",
    },
    {
      id: 3,
      text: "A reader lives a thousand lives before he dies... The man who never reads lives only one.",
      user: "George R.R. Martin",
      image: "/images/testimonials/george-r-r-martin.jpg",
    },
    {
      id: 4,
      text: "You don’t have to burn books to destroy a culture. Just get people to stop reading them.",
      user: "Ray Bradbury",
      image: "/images/testimonials/ray_bradbury.jpg",
    },
  ];
  const booksCovers = [
    "/images/book-covers/book1.jpg",
    "/images/book-covers/book2.jpg",
    "/images/book-covers/book3.jpg",
    "/images/book-covers/book4.jpg",
    "/images/book-covers/book5.jpg",
    "/images/book-covers/book6.jpg",
    "/images/book-covers/book7.jpg",
    "/images/book-covers/book8.jpg",
    "/images/book-covers/book9.jpg",
    "/images/book-covers/book10.jpg",
    "/images/book-covers/book11.jpg",
    "/images/book-covers/book12.jpg",
  ];
  return (
    <section className=" flex flex-col items-center gap-24 bg-teal-100">
      <div className="w-[95%] mx-auto flex flex-col md:flex-row">
        {/* text */}
        <div className="w-full md:w-2/3 px-4 py-24">
          <div className="flex flex-col items-center justify-center">
            <span className="subheading">Testimonials</span>
            <h2 className="text-4xl font-bold mb-16 text-center">
              Heading Lorem, ipsum dolor.
            </h2>
          </div>

          {/* testtimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
            {testimonials.map((testimonial) => {
              const { id, text, image, user } = testimonial;
              return (
                <figure key={id}>
                  <Image
                    src={image}
                    alt={user}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full mb-3"
                  />
                  <blockquote className="text-lg leading-[1.8] mb-4">
                    {text}
                  </blockquote>
                  <p className="text-gray-700">&mdash; {user}</p>
                </figure>
              );
            })}
          </div>
        </div>

        {/* galery */}
        <div className="w-full md:w-1/3 grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {booksCovers.map((bookCover, idx) => {
            return (
              <figure className="overflow-hidden" key={idx}>
                <Image
                  src={bookCover}
                  alt="photo of book"
                  width={200}
                  height={200}
                  className="block w-full hover:scale-105 duration-300"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
