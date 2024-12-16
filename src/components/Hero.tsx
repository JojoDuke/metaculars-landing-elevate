import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="grid-background" />
      <div className="hero-glow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full"
          >
            AI-Powered Customer Success
          </motion.span>
          
          <h1
            className="font-sans text-4xl md:text-6xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight z-100"
          >
            Revolutionize Customer Onboarding with AI
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-12"
          >
            Turn every free user into a loyal, paying customer—automatically and at scale.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="metallic-button">
              Start Converting Users
            </button>
            <button className="px-8 py-3 text-gray-300 hover:text-white transition-colors">
              Schedule a Demo →
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 p-8 glass-card max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">3x</h3>
                <p className="text-gray-400">Higher Conversion</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-gray-400">AI Assistance</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-gray-400">Automation</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;