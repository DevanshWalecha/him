import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    { name: "DUCTOVENT", logo: "/logos/ductovent.jpeg" },
    { name: "MEP360", logo: "/logos/mep36.png" },
    { name: "FOCUS", logo: "/logos/FOCUS.png" },
    { name: "SIE", logo: "/logos/sie.jpg" },
  ];
  // ... (variants code remains the same)

  return (
      // CHANGED: from bg-gray-50 to bg-white
      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-display text-gray-800 mb-4">Our Clients</h2>
            <p className="text-gray-600 mb-12 mx-auto max-w-2xl">
              We are proud to partner with leading organizations and societies in the industry.
            </p>
          </motion.div>

          <motion.div
              className="flex justify-center items-center gap-x-12 md:gap-x-16 gap-y-10 flex-wrap"
              // ... (variants and other props remain the same)
          >
            {clients.map((client) => (
                <motion.div
                    key={client.name}
                    // ... (variants and other props remain the same)
                >
                  <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105"
                      title={client.name}
                  />
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Clients;