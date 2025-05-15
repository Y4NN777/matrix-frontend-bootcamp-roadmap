import React from 'react';
import { Session } from '../types';
import SessionCard from './SessionCard';
import { motion } from 'framer-motion';

interface RoadmapContentProps {
  sessions: Session[];
  toggleSession: (sessionId: number) => void;
}

const RoadmapContent: React.FC<RoadmapContentProps> = ({ sessions, toggleSession }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="relative z-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Matrix-style timeline line */}
      <div className="absolute left-[22px] md:left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#c1ff00] via-[#c1ff00]/50 to-[#333333] z-0 glow" />
      
      {sessions.map((session, index) => (
        <SessionCard 
          key={session.id} 
          session={session} 
          index={index}
          toggleSession={() => toggleSession(session.id)}
          isLast={index === sessions.length - 1}
        />
      ))}
    </motion.div>
  );
};

export default RoadmapContent;