// Team.jsx
import { FaArrowRight } from "react-icons/fa";
import { teamData } from "./TeamData";


const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h5 className="text-sm font-semibold">Our Team</h5>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-snug">
          Meet our dedicated and <br /> experienced team of experts
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group text-left cursor-pointer"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <div className="border border-gray-300 rounded-md p-2 transition-transform duration-300 group-hover:translate-x-2">
                  <FaArrowRight className="text-blue-600 text-sm" />
                </div>
              </div>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
