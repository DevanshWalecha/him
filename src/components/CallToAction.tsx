
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useContactFormDialog } from "./ContactFormDialogContext";

const CallToAction = () => {
  const { open } = useContactFormDialog();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-white/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <motion.h2 
          className="text-4xl lg:text-5xl font-display text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Elevate Your Technical Initiatives?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join the leading technical professionals and societies who trust TECHNOVENT for their innovation needs.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-10 py-4 text-lg font-semibold shadow-2xl border-0 transition-all duration-300"
              onClick={open}
            >
              Schedule a Free Consultation
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg backdrop-blur-sm bg-white/10 transition-all duration-300 shadow-xl"
            >
              Download Brochure
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
