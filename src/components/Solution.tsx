import { motion } from "framer-motion";
import { ArrowRight, Bot, Clock, DollarSign } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Problems We Solve
          </h2>
          <p className="text-gray-400">
            Transform your product-led growth strategy with AI-powered solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
          >
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Time-Intensive Onboarding</h3>
            <p className="text-gray-400 mb-4">
              Manual onboarding processes drain resources and slow down user activation
            </p>
            <div className="border-t border-primary/10 pt-4 mt-4">
              <h4 className="text-primary font-semibold mb-2">Our Solution</h4>
              <p className="text-gray-400">
                Automated AI workflows that guide users 24/7
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card"
          >
            <Bot className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Low Conversion Rates</h3>
            <p className="text-gray-400 mb-4">
              Generic onboarding fails to address individual user needs
            </p>
            <div className="border-t border-primary/10 pt-4 mt-4">
              <h4 className="text-primary font-semibold mb-2">Our Solution</h4>
              <p className="text-gray-400">
                Personalized experiences that boost conversion by 3x
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card"
          >
            <DollarSign className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Revenue Leakage</h3>
            <p className="text-gray-400 mb-4">
              Missed opportunities to convert free users to paying customers
            </p>
            <div className="border-t border-primary/10 pt-4 mt-4">
              <h4 className="text-primary font-semibold mb-2">Our Solution</h4>
              <p className="text-gray-400">
                Smart upgrade prompts at the perfect moment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;