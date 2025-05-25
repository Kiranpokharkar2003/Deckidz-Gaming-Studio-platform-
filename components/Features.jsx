import React from "react";

const Features = () => {
  const features = [
    { title: "Interactive Learning", description: "Engaging lessons with animations." },
    { title: "Personalized Courses", description: "Courses tailored for every learner." },
    { title: "24/7 Support", description: "Assistance whenever you need it." }
  ];

  return (
    <section id="features" className="p-12 bg-[#F5F5F5] text-[#333333]">
      <h2 className="text-3xl font-bold text-center text-[#041d7f]">Features</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center border-t-4 border-[#FFD700]">
            <h3 className="text-xl font-semibold text-[#0077B6]">{feature.title}</h3>
            <p className="text-[#333333] mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;