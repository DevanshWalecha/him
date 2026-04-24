import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-display text-gray-800 mb-6">About TECHNOVENT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
          >
            {/* Left side: Text content */}
            <motion.div
                className="space-y-6"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  variants={itemVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
              >
                TECHNOVENT is an emerging startup committed to driving innovation and delivering cutting-edge solutions to societies, companies and professional skill development.
              </motion.p>

              <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  variants={itemVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Founded by Ms. Purnima Sharma, TECHNOVENT aims to bridge the gap between technical expertise and practical implementation by offering software tools and dedicated services to technical communities and engineering societies.
              </motion.p>

              <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  variants={itemVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
              >
                With a vision to create a smarter, more collaborative technical ecosystem, TECHNOVENT focuses on simplifying processes, enhancing engagement, and boosting technical capabilities.
              </motion.p>
            </motion.div>

            {/* Right side: Technovent Circle */}
            <motion.div
                className="flex items-center justify-center"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                  className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-4xl font-display text-white tracking-wider">TECHNOVENT</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default AboutUs;
