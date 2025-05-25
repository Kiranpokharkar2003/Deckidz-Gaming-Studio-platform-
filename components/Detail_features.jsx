import React from "react";
import { Gift, Star, Brain, Smile } from "lucide-react"; // Icons

const Features = () => {
  const features = [
    {
      icon: <Gift size={40} />,
      title: "Educational Gifts",
      description:
        "Our product is AR-based, helping kids experience objects in real-time, fostering curiosity and fun learning.",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      icon: <Star size={40} />,
      title: "Unique Birthday Gift",
      description:
        "A perfect birthday gift that enhances learning with puzzle cards designed to develop memory and awareness.",
      bgColor: "bg-gradient-to-r from-pink-400 to-red-500",
    },
    {
      icon: <Brain size={40} />,
      title: "Innovative Learning",
      description:
        "Augmented reality boosts children's visualization skills, creativity, and problem-solving abilities.",
      bgColor: "bg-gradient-to-r from-blue-400 to-indigo-500",
    },
    {
      icon: <Smile size={40} />,
      title: "Best for Kids",
      description:
        "These puzzle cards improve motor skills, creativity, and cognitive abilities for children aged 3+.",
      bgColor: "bg-gradient-to-r from-green-400 to-teal-500",
    },
  ];

  return (
    <section className="p-10 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#041d7f]">
          Our Educational Animal Games Kit Can Be Used As:
        </h2>
        <div className="w-16 h-2 bg-yellow-500 mx-auto mt-2"></div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-xl text-white transition-transform transform hover:scale-105 ${feature.bgColor}`}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-bold text-center">{feature.title}</h3>
            <p className="text-sm text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
