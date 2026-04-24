import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = [
    "Professional software that enhances HVAC design quality",
    "A trusted partner for society and membership management",
    "Expert support for event planning and execution",
    "A platform to boost professional learning and visibility",
    "Seamless collaboration between industry, academia, and individuals",
    "Integrated design and marketing solutions to build your brand identity",
    "We facilitate B2B meetings for HVAC businesses through our network of architects and consultants."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1
    }
  };

  return (
      <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display text-gray-800 mb-6">Why Choose TECHNOVENT</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access to comprehensive solutions that drive technical excellence and innovation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                  <motion.div
                      key={index}
                      className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      variants={itemVariants}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                  >
                    <motion.div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg"
                        whileHover={{
                          scale: 1.2,
                          rotate: 360
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          duration: 0.6
                        }}
                    >
                      <Check className="w-5 h-5 text-white" />
                    </motion.div>
                    <motion.p
                        className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                      {benefit}
                    </motion.p>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Benefits;