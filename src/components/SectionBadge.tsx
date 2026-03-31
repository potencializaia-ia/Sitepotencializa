import { motion } from 'framer-motion';

interface SectionBadgeProps {
  text: string;
  className?: string;
}

export function SectionBadge({ text, className = '' }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#2D2D4A] ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-[#ff851b]" />
      {text}
    </motion.div>
  );
}
