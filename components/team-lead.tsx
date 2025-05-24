"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Calendar, MessageSquare } from "lucide-react";

export default function TeamLead() {
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
    <section className="w-full py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/3 flex-shrink-0"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Team Lead"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Skanda Vivek</h3>
                <p className="text-white/80">
                  Senior AI Data Scientist NLP, Intuit
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="w-full lg:w-2/3">
            <motion.div
              variants={itemVariants}
              className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
            >
              MEET OUR FOUNDER
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Pioneering Digital Excellence
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mb-6"
            >
              With over a decade of experience in technology and innovation, our
              founder has helped multiple organizations transform their digital
              presence, implement cutting-edge solutions, and create exceptional
              user experiences that drive sustainable growth and meaningful
              impact.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mb-8"
            >
              A recognized thought leader in the industry, Pranjal regularly
              speaks at global conferences and has been featured in leading
              publications for her innovative approaches to business challenges.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-primary" />
                <span>Software Developer</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <BookOpen className="w-5 h-5 text-primary" />
                <span>Published Author</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Renowned Speaker</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <span>Industry advisor</span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button variant="default" asChild>
                <a
                  href="https://calendly.com/skandavivek/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Consultation
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
