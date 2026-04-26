import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useContactFormDialog } from "./ContactFormDialogContext";

const Hero = () => {
  const backgroundRef = useRef(null);
  const overlayRef = useRef(null);
  const { open } = useContactFormDialog();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(backgroundRef.current,
        { scale: 1.2, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    )
        .fromTo(overlayRef.current,
            { opacity: 0.6 },
            { opacity: 0.4, duration: 1.5 },
            "-=1.5"
        );
  }, []);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const services = [
    {
      title: "MEP360 Software",
      description: "Advanced HVAC Design & Analysis Tools"
    },
    {
      title: "Society Services",
      description: "Technical Community Management For Societies like FOCUS, SIE"
    },
    {
      title: "Company Services",
      description: "Social Media Marketing,Marketing Flyer Design,Backend Services"
    }
  ];

  const additionalServices = [
    {
      title: "Creative Social Media Services",
      description: "Engaging content and strategic growth for your brand online"
    },
    {
      title: "Workshops and Conferences",
      description: "Interactive learning and networking opportunities with industry leaders"
    }
    ,
    {
      title: "Industry Partnerships",
      description: "Collaborative Solutions,B2B Meetings"
    }
  ];

  return (
      <div className="relative min-h-screen flex flex-col justify-start overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-32 w-full">

        <div
            ref={backgroundRef}
            className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
        >
          <div
              ref={overlayRef}
              className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-800/60 to-purple-900/70 backdrop-blur-md"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-orange-400/20" />
        </div>

        <motion.div
            className="relative z-10 w-full max-w-7xl mx-auto py-12 sm:py-16 lg:py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          {/* Mobile Layout (< lg) */}
          <div className="lg:hidden flex flex-col items-center space-y-8 sm:space-y-12">
            {/* Mobile Header */}
            <motion.div
                className="text-center mb-6 sm:mb-8"
                variants={itemVariants}
            >
              <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
              >
                TECHNOVENT
              </motion.h1>
              <motion.p
                  className="text-cyan-200 text-sm sm:text-base font-medium px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
              >
                Driving Innovation Through Smart Solutions
              </motion.p>
            </motion.div>

            {/* Mobile Services Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-2xl"
                variants={itemVariants}
            >
              {[...services, ...additionalServices].map((service, index) => (
                  <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <motion.div
                        className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full flex-shrink-0 mt-1"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                    />
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-cyan-200 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Layout (>= lg) */}
          <div className="hidden lg:flex items-center justify-between w-full gap-16">
            {/* Left side - Services */}
            <motion.div
                className="flex flex-col space-y-12 lg:w-1/3"
                variants={itemVariants}
            >
              {services.map((service, index) => (
                  <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
                  >
                    <motion.div
                        className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full flex-shrink-0 shadow-lg"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 1, 0.8],
                          boxShadow: [
                            "0 0 10px rgba(34, 211, 238, 0.5)",
                            "0 0 20px rgba(251, 146, 60, 0.8)",
                            "0 0 10px rgba(34, 211, 238, 0.5)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                    />
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-cyan-200 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
              ))}
            </motion.div>

            {/* Center - TECHNOVENT Circle */}
            <motion.div
                className="flex items-center justify-center lg:w-1/3"
                variants={itemVariants}
            >
              <motion.div
                  className="relative"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
              >
                {/* Outer glow ring */}
                <motion.div
                    className="absolute inset-0 w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] max-w-full max-h-full rounded-full bg-gradient-to-r from-cyan-400/40 via-blue-500/30 to-orange-400/40 blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                />

                {/* Main circle */}
                <motion.div
                    className="relative w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] bg-white rounded-full flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                  {/* Connecting lines */}
                  <div className="absolute inset-0">
                    <motion.div
                        className="absolute left-0 top-1/2 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent -translate-x-16 -translate-y-0.5"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 64, opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    />
                    <motion.div
                        className="absolute right-0 top-1/2 w-16 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent translate-x-16 -translate-y-0.5"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 64, opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    />
                  </div>

                  {/* TECHNOVENT Logo/Text */}
                  <div className="text-center">
                    <motion.h1
                        className="text-6xl font-bold text-blue-900 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                      TECHNOVENT
                    </motion.h1>
                    <motion.p
                        className="text-blue-700 text-sm font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                    >
                      Driving Innovation Through Smart Solutions
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Additional Services */}
            <motion.div
                className="flex flex-col space-y-12 lg:w-1/3"
                variants={itemVariants}
            >
              {additionalServices.map((service, index) => (
                  <motion.div
                      key={index}
                      className="flex items-center space-x-4 justify-end"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
                  >
                    <div className="text-right">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-cyan-200 text-sm">
                        {service.description}
                      </p>
                    </div>
                    <motion.div
                        className="w-4 h-4 bg-cyan-400 rounded-full flex-shrink-0"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5 + 1
                        }}
                    />
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons - Responsive positioning */}
        {/* CTA Buttons */}
        <motion.div
            className="w-full flex justify-center px-4 z-20 mt-10 lg:mt-0
             lg:absolute lg:bottom-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Book a Demo */}
            <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
            >
              <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-2xl border-0 transition-all duration-300"
                  onClick={() => {
                    if (typeof open === 'function') {
                      open();
                    } else {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
              >
                Book a Demo
              </Button>
            </motion.div>

            {/* Contact Us */}
            <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
            >
              <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-sm bg-white/10 transition-all duration-300 shadow-xl"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      const targetY = el.getBoundingClientRect().top + window.pageYOffset;
                      const startY = window.pageYOffset;
                      const distance = targetY - startY;
                      const duration = 1200;
                      let startTime: number | null = null;
                      function step(currentTime: number) {
                        if (!startTime) startTime = currentTime;
                        const time = currentTime - startTime;
                        const percent = Math.min(time / duration, 1);
                        window.scrollTo(0, startY + distance * easeInOutQuad(percent));
                        if (percent < 1) requestAnimationFrame(step);
                      }
                      function easeInOutQuad(t: number) {
                        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                      }
                      requestAnimationFrame(step);
                    }
                  }}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>



        {/* Floating particles - Reduced for mobile performance */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(window.innerWidth < 768 ? 4 : 8)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-300/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-15, 15, -15],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
              />
          ))}
        </div>
      </div>
  );
};

export default Hero;