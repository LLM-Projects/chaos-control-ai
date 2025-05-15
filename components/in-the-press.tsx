"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function InThePress() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="press" className="w-full py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            IN THE PRESS
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured in Leading Publications
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Our work and expertise have been recognized by top industry
            publications and media outlets around the world.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          <PressLogo src="/placeholder.svg?height=80&width=160" alt="Forbes" />
          <PressLogo
            src="/placeholder.svg?height=80&width=160"
            alt="Columbia Business School"
          />
          <PressLogo
            src="/placeholder.svg?height=80&width=160"
            alt="AI Circle"
          />
          <PressLogo
            src="/placeholder.svg?height=80&width=160"
            alt="Tech Journal"
          />
        </motion.div>
      </div>
    </section>
  );
}

function PressLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="flex items-center justify-center p-4"
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={160}
        height={80}
        className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
      />
    </motion.div>
  );
}
