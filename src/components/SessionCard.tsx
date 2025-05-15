import React from 'react';
import { Session } from '../types';
import ModuleCard from './ModuleCard';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SessionCardProps {
  session: Session;
  index: number;
  toggleSession: () => void;
  isLast: boolean;
}

const SessionCard: React.FC<SessionCardProps> = ({ 
  session, 
  index, 
  toggleSession,
  isLast
}) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const moduleContainer = {
    hidden: { opacity: 0, height: 0 },
    show: { 
      opacity: 1, 
      height: "auto", 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  return (
    <motion.div
      className={`relative z-10 ${!isLast ? 'pb-6' : ''}`}
      variants={item}
    >
      <motion.div 
        className={`
          flex items-start gap-4 md:gap-6 pl-1 
          cursor-pointer hover:bg-[#111111] rounded-lg p-3 transition-colors
          ${session.active ? 'bg-[#111111]' : ''}
          hover:shadow-[0_0_15px_rgba(193,255,0,0.1)]
        `}
        onClick={toggleSession}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex-shrink-0 mt-1">
          {session.completed ? (
            <motion.div 
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-[#c1ff00]" />
            </motion.div>
          ) : (
            <div className="bg-[#161616] border-2 border-[#c1ff00] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#c1ff00] font-bold text-lg">
              {index}
            </div>
          )}
        </div>
        
        <div className="flex-grow pt-1">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl md:text-2xl text-white">
              Session {index}: {session.title}
            </h3>
            <motion.div 
              className="text-[#c1ff00]"
              animate={{ rotate: session.active ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {session.active ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </motion.div>
          </div>
          <p className="text-gray-400 mt-1">{session.description}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {session.active && (
          <motion.div 
            className="pl-16 pr-4 mt-2 space-y-4"
            variants={moduleContainer}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {session.modules.map((module, idx) => (
              <ModuleCard 
                key={idx} 
                module={module} 
                index={idx} 
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SessionCard;