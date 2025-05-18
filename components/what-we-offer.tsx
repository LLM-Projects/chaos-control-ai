"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, LineChart, Lightbulb, Rocket, Users, Cpu } from "lucide-react";

export default function WhatWeOffer() {
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
    <section id="services" className="w-full py-20 bg-muted/30">
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
            WHAT WE OFFER
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Comprehensive Solutions for Your Usecase
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            We provide end-to-end services to help you navigate the digital
            landscape and achieve your goals with concrete ideas and up to date
            technology.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ServiceCard
            icon={<Lightbulb className="w-10 h-10 text-primary" />}
            title="Website Creation"
            description="We help you develop and build beautiful, modern websites that align with your business goals."
          />
          <ServiceCard
            icon={<Cpu className="w-10 h-10 text-primary" />}
            title="AI Integration"
            description="Leverage cutting-edge artificial intelligence to automate processes, gain insights, and create intelligent solutions for your business."
          />
          <ServiceCard
            icon={<LineChart className="w-10 h-10 text-primary" />}
            title="Data Analytics"
            description="Transform your data into actionable insights that inform strategic decision-making."
          />
          <ServiceCard
            icon={<Rocket className="w-10 h-10 text-primary" />}
            title="Growth Marketing"
            description="Accelerate your business growth with data-driven marketing strategies and campaigns."
          />
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-primary/20 transition-all duration-300"
    >
      <div className="mb-4 p-3 rounded-lg inline-block bg-primary/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
