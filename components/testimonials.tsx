"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "Fantastic service, our website was designed with the help of this company and turned out wonderful. Everything was very detailed and included all the necessary information I wanted to include.\n\nThe process was very efficient, from communication to production. I highly recommend them to anyone wanting to create a website.",
      author: "Ann Wang",
      role: "Customer",
    },
  ]

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
    <section id="testimonials" className="w-full py-20">
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
            TESTIMONIALS
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-10 left-0 opacity-10">
            <Quote className="w-20 h-20 text-primary" />
          </div>

          <div className="relative overflow-hidden min-h-[200px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center px-6"
            >
              <p className="text-xl md:text-2xl italic mb-8">"{testimonials[0].quote}"</p>
              <div>
                <p className="font-semibold text-lg">{testimonials[0].author}</p>
                <p className="text-muted-foreground">{testimonials[0].role}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
