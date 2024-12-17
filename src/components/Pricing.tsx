import { motion } from "framer-motion";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

const Pricing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card w-full text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Ready to Transform Your Customer Experience?
          </h3>
          <p className="text-gray-400 mb-8">
            Join leading companies using our AI-powered platform to automate and optimize their customer success journey.
          </p>
          <button 
            className="metallic-button"
            onClick={() => setIsDialogOpen(true)}
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      <ContactDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default Pricing;