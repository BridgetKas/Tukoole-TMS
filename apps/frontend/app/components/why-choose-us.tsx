import { FaCheckCircle } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Image from "next/image";

export default  function WhyChooseUs () {
  const features = [
    {
      icon: < FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Manual vetting",
      description: "Every candidate is personally screened"
    },
    {
      icon: <FiTarget className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Skills + communication checks",
      description: "Technical and soft skills verified"
    },
    {
      icon: <FaRegUser className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cultural fit & ownership mindset",
      description: "Aligned with your company values"
    },
    {
      icon: <FaRegClock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Long-term placement focus",
      description: "Building lasting partnerships, not quick fills"
    }
  ];

  return (
    <div className="bg-linear-to-b from-purple-50 to-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Quality comes first
              </h2>
              <p className="text-lg sm:text-xl text-gray-700">
                We don't believe in "cheap talent".
              </p>
              <p className="text-lg sm:text-xl font-semibold">
                We believe in right talent.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="shrink-0 text-blue-950 mt-1">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                alt="Team member"
                className="w-full h-auto object-contain"
                width={500}
                height={500}
              />
            
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 space-y-1 sm:space-y-0">
                <span className="text-5xl sm:text-6xl font-bold text-blue-950">95%</span>
                <span className="text-lg sm:text-xl text-gray-700">Client retention 3+ years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

