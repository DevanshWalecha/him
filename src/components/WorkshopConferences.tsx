import { motion } from "framer-motion";
const workshopImages=[
    "/c1.jpeg",
    "c2.jpeg",
    "/techn1.jpg",
    "/techn4.jpg",
    "techn5.jpg",
    "techn6.jpg"
]
const WorkshopsConferences = () => {
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
        <section id="workshops" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl lg:text-5xl font-display text-gray-800 mb-6">
                        Workshops / Conferences
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
                </motion.div>

                {/* Grid of images */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {workshopImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-lg group"
                            variants={itemVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img
                                src={src}
                                alt={`Workshop ${index + 1}`}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WorkshopsConferences;