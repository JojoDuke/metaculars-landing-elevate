import { motion } from "framer-motion";
import { Bot, Brain, LineChart, Users } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "Personalized Onboarding",
    description: "AI-driven personalization adapts to each user's needs and behavior patterns."
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "Context Learning",
    description: "Advanced algorithms learn from user interactions to improve engagement."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Multimodal Engagement",
    description: "Connect with users through their preferred communication channels."
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Journey Workflows",
    description: "Automated workflows guide users to their 'aha' moment faster."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful Features for Modern SaaS
          </h2>
          <p className="text-gray-400">
            Everything you need to convert and retain more customers, powered by advanced AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group hover:border-primary/30 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;