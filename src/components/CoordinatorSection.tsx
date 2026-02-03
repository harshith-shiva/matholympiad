import contactIcon from "../assets/images/contact-icon.png"
import { coordinators } from "./coordinators";

const CoordinatorsSection = () => {
  return (
    <section id="Co-ordinators" className="py-14 bg-white">
      <div className="">
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-13">Co-ordinators</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-8">
        {coordinators.map((coordinator, index) => (
          <div
            key={index}
            className="bg-white shadow-xl p-6 rounded-2xl transition-transform transform hover:scale-105 border-t-4 border-l-3 border-blue-500 text-center"
          >
            <div className="flex justify-center mb-4">
              <img src={contactIcon} />
            </div>
            <h3 className="text-gray-700 text-lg font-semibold">{coordinator.name}</h3>
            <p className="text-gray-600 text-sm mb-2 whitespace-pre-line">{coordinator.title}</p>
            <p className="text-blue-500 font-medium">{coordinator.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoordinatorsSection;
