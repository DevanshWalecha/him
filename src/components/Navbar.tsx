import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { useContactFormDialog } from "./ContactFormDialogContext";

const Navbar = () => {
  const { open } = useContactFormDialog(); // ✅ hook for dialog

  return (
      <motion.nav
          className="absolute w-full z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-20">
            <motion.a
                href="/"
                className="text-2xl font-display text-white font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
              TECHNOVENT
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Services", "Benefits", "Contact"].map((item, index) => (
                  <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white hover:text-blue-200 transition-colors duration-300 relative"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                  >
                <span className="relative">
                  {item}
                  <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                  />
                </span>
                  </motion.a>
              ))}
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                <Button
                    variant="outline"
                    onClick={open} // ✅ working now
                    className="text-blue-600 border-2 border-white bg-white hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 font-semibold px-6 py-2"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-6 mt-8">
                    {["About", "Services", "Benefits", "Contact"].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg hover:text-blue-600 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {item}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <Button
                          className="w-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                          onClick={open} // ✅ now also works in mobile nav
                      >
                        Book a Demo
                      </Button>
                    </motion.div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
  );
};

export default Navbar;
