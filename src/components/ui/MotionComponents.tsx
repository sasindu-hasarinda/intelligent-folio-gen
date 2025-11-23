import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const underlineDrawVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const popInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animate text by letters with staggered fade-in
interface MotionTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  tag?: keyof JSX.IntrinsicElements;
}
export const MotionText: React.FC<MotionTextProps> = ({
  text,
  className = "",
  style,
  tag = "span",
}) => {
  const Tag = tag;
  const letters = Array.from(text);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Tag className={className} style={style}>
      <motion.span
        aria-hidden="true"
        style={{ display: "inline-block", overflow: "hidden" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
};

// Animate sections on scroll with fade-up, slide-left, underline draw etc.
// type prop defines animation style: 'fadeUp', 'slideInLeft', 'underlineDraw', 'popIn'
interface AnimatedSectionProps {
  children: ReactNode;
  type?: "fadeUp" | "slideInLeft" | "underlineDraw" | "popIn";
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  type = "fadeUp",
  className = "",
  tag = "div",
}) => {
  const Tag = motion[tag];

  let variants: Variants = fadeUpVariants;
  switch (type) {
    case "slideInLeft":
      variants = slideInLeftVariants;
      break;
    case "underlineDraw":
      variants = underlineDrawVariants;
      break;
    case "popIn":
      variants = popInVariants;
      break;
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </Tag>
  );
};
