import React, { useState } from 'react';
import { ModuleContent } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModuleCardProps {
  module: ModuleContent;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  const [expanded, setExpanded] = useState(false);

  const moduleVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      } 
    }
  };

  const detailsVariant = {
    hidden: { opacity: 0, height: 0 },
    show: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    }
  };

  return (
    <motion.div 
      variants={moduleVariant}
      className={`
        bg-[#161616] rounded-lg p-4 border-l-4 border-[#c1ff00] 
        hover:bg-[#1a1a1a] transition-colors
        hover:shadow-[0_0_20px_rgba(193,255,0,0.15)]
      `}
      whileHover={{ scale: 1.01, x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div 
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h4 className="font-bold text-white text-lg">
            {index + 1}. {module.title}
          </h4>
          <p className="text-gray-400 text-sm mt-1">{module.description}</p>
        </div>
        <motion.div 
          className="text-[#c1ff00] flex-shrink-0 mt-1"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {expanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {expanded && module.details && (
          <motion.div 
            className="mt-4 space-y-2 border-t border-[#252525] pt-4"
            variants={detailsVariant}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {module.details.map((detail, idx) => (
              <motion.p 
                key={idx} 
                className="text-gray-300 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {detail}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ModuleCard;