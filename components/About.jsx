import React from "react";
const About = () => {
    return (
      <section id="about" className="p-12 bg-[#F5F5F5] text-[#333333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://m.media-amazon.com/images/I/71T8CUFMfuL.jpg"
              alt="About Deckidz"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#00C897]">AR Animal Games Function</h2>
            <p className="text-lg text-[#333333] mt-4 leading-relaxed">
            Augmented Reality has proven to be an effective means of educating and entertaining young people of all ages and grade levels, from toddlers to graduate students. 
            </p>
            <p className="text-lg text-[#333333] mt-4 leading-relaxed">
            AR Puzzle Cards can be used to teach the Animal Name by digitally displaying an animal whose name & animal Match on the Puzzle.
            </p>
            <p className="text-lg text-[#333333] mt-4 leading-relaxed">
              Our mission is to empower learners with knowledge through immersive and cutting-edge learning experiences.
            </p>
            <p className="text-lg text-[#333333] mt-4 leading-relaxed">
            ​
            Today’s educators understand that interaction and creativity enhance the learning process, and Augmented Reality provides both. 
            </p>
            <p className="text-lg text-[#333333] mt-4 leading-relaxed">
            AR can transform the classroom into an environment where characters can spring to life from the pages of a textbook.
            </p>
            
            <a
              href="#contact"
              className="mt-6 inline-block bg-[#0077B6] hover:bg-[#FFD700] text-white px-6 py-3 rounded-lg transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;