"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { basePath } from "@/lib/basePath";

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
            OUR WORKS
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Clients
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            We partner with organizations and individuals to deliver impactful digital solutions, from websites to marketing and technical consulting.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ProjectCard
            image="/images/content/music-doremi.png"
            title="Music Do Re Mi"
            url="https://musicdoremi.com"
            platform="Website Creation"
            description=""
          />
          <ProjectCard
            image="/images/content/yifan.png"
            title="YiFan Restaurant"
            url=""
            platform="Social Media Marketing"
            description=""
          />
          <ProjectCard
            image="/images/content/ragwph_cover.png"
            title="Retrieval-Augmented Generation in Production with Haystack"
            url="https://learning.oreilly.com/library/view/retrieval-augmented-generation-in/9781098165161/"
            platform="Technical Writing and Consulting"
            description=""
          />
          {/* <ProjectCard
            image="/placeholder.svg?height=400&width=600"
            title="Docs QA Bot🤖"
            url="https://github.com/LLM-Projects/docs-qa-bot"
            platform="Medium"
            description="A streamlit app that enables users to interact with the uploaded PDF"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  image,
  title,
  url,
  platform,
  description,
}: {
  image: string;
  title: string;
  url: string;
  platform: string;
  description: string;
}) {
  const cardContent = (
    <div className="relative aspect-video overflow-hidden rounded-xl">
      <Image
        src={`${basePath}${image || "/placeholder.svg"}`}
        alt={title}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-white/80 mb-2 block">{platform}</span>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );

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
      className="group relative overflow-hidden rounded-xl cursor-pointer"
    >
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}
