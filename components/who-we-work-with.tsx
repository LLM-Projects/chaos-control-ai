"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function WhoWeWorkWith() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="w-full py-20">
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
            WHO WE WORK WITH
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Innovative Leaders
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-muted-foreground">
            We partner with forward-thinking organizations across industries to deliver exceptional results and drive
            meaningful change.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <TeamMember
            image="/placeholder.svg?height=400&width=400"
            name="Sarah Johnson"
            role="Chief Strategy Officer"
            company="TechVision Inc."
            quote="Working with this team has been transformative for our business. Their strategic insights and technical expertise helped us achieve our goals faster than we thought possible."
          />
          <TeamMember
            image="/placeholder.svg?height=400&width=400"
            name="Michael Chen"
            role="VP of Product"
            company="Innovate Labs"
            quote="The team's ability to understand our complex requirements and translate them into elegant solutions has been impressive. They're true partners in our success."
          />
        </motion.div>
      </div>
    </section>
  )
}

function TeamMember({
  image,
  name,
  role,
  company,
  quote,
}: { image: string; name: string; role: string; company: string; quote: string }) {
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
      className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-primary font-medium">{role}</p>
          <p className="text-sm text-muted-foreground mb-4">{company}</p>
          <p className="italic text-muted-foreground">&ldquo;{quote}&rdquo;</p>
        </div>
      </div>
    </motion.div>
  )
}
