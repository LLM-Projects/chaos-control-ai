"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
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
    <section id="contact" className="w-full py-16 bg-black text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/20 text-primary"
          >
            CONTACT
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get in Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-white/70 mb-8">
            Have a question or want to learn more about our services? Reach out to us directly.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-white/70">info@chaoscontrol.net</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold"><a href="https://maps.app.goo.gl/yWftUEvG24k914Cd6" target="_blank">Location</a></h3>
              {/* <p className="text-white/70">123 Innovation Street</p>
              <p className="text-white/70">San Francisco, CA 94103</p> */}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          © {new Date().getFullYear()} ChaosControl. All rights reserved.
        </motion.div>
      </div>
    </section>
  )
}
