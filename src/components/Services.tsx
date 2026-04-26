import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Wrench, Users, GraduationCap, CalendarDays, Palette, Share2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "MEP360 Software",
      description: "Comprehensive HVAC design and analysis software for engineering professionals.",
      features: ["Load calculations", "System design", "Energy analysis", "Compliance reporting"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Technical Society Services",
      description: "Complete management solutions for engineering societies and professional organizations.",
      features: ["Communication tools", "Resource sharing", "Community building","Organizing conferences and technical workshops","Social media marketing","Marketing flyer design"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Company Services ",
      description: "Professional training and certification programs for technical advancement.",
      features: ["Expert-led training", "Certification programs", "Skill assessments", "Career guidance","Backend Services"]
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Event Management",
      description: "End-to-end event planning and execution for technical conferences and workshops.",
      features: ["Event planning", "Speaker coordination", "Registration management", "Technical support","Hotel Booking"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design & Web Development",
      description: "Creative design and development solutions to build and enhance your brand's online presence.",
      features: ["Logo Design", "Web Development", "Digital Media Graphics", "Brand Identity"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Comprehensive social media strategies to enhance your online presence and engagement.",
      features: ["Content Strategy", "Campaign Management", "Analytics & Reporting", "Audience Engagement"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display text-gray-800 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to empower technical professionals and organizations
            </p>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                          className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)"
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                            <motion.li
                                key={featureIndex}
                                className="flex items-center space-x-2 text-gray-700"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: featureIndex * 0.1,
                                  duration: 0.4
                                }}
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span>{feature}</span>
                            </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Services;