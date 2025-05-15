"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function OurWorks() {
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
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            ON STAGE
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Speaking Engagements
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Our team regularly shares insights and expertise at industry
            conferences and events around the world.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <SpeakingEvent
            image="/placeholder.svg?height=400&width=600"
            title="Future of AI Summit"
            location="New York, 2023"
            description="Keynote on 'Transforming Business Models with Artificial Intelligence'"
          />
          <SpeakingEvent
            image="/placeholder.svg?height=400&width=600"
            title="Global Tech Conference"
            location="London, 2023"
            description="Panel discussion on 'Digital Transformation Strategies for Enterprise'"
          />
          <SpeakingEvent
            image="/placeholder.svg?height=400&width=600"
            title="Innovation Forum"
            location="San Francisco, 2022"
            description="Workshop on 'Building Resilient Digital Ecosystems'"
          />
          <SpeakingEvent
            image="/placeholder.svg?height=400&width=600"
            title="Women in Tech Summit"
            location="Berlin, 2022"
            description="Fireside chat on 'Leadership in the Digital Age'"
          />
        </motion.div>
      </div>
    </section>
  );
}

function SpeakingEvent({
  image,
  title,
  location,
  description,
}: {
  image: string;
  title: string;
  location: string;
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
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-white/80 mb-2">{location}</p>
          <p className="text-sm text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
