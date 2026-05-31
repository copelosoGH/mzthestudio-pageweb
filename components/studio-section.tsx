"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Mic2,
  Headphones,
  Camera,
  Lightbulb,
  Monitor,
  SlidersHorizontal,
  Wifi,
  Plug,
  Droplets,
  Coffee,
  Bath,
  CupSoda,
  Gamepad2,
  Check,
} from "lucide-react"

const equipment = [
  {
    icon: Mic2,
    title: "2 micrófonos profesionales",
    description: "Audio cristalino para tu contenido",
  },
  {
    icon: Headphones,
    title: "Auriculares con retorno",
    description: "Monitoreo en tiempo real",
  },
  {
    icon: Camera,
    title: "Cámara 4K",
    description: "Imagen profesional garantizada",
  },
  {
    icon: Lightbulb,
    title: "Iluminación profesional",
    description: "Setup de luces optimizado",
  },
  {
    icon: Monitor,
    title: "Monitor con imagen en vivo",
    description: "Visualización instantánea",
  },
  {
    icon: SlidersHorizontal,
    title: "Dirección de cámaras y sonido",
    description: "Operador técnico incluido",
  },
]

const amenities = [
  { icon: Gamepad2, text: "Sillas gamer premium" },
  { icon: Wifi, text: "Wi-Fi" },
  { icon: Plug, text: "Tomas de corriente" },
  { icon: Droplets, text: "Dispenser agua fría/caliente" },
  { icon: Bath, text: "Baño unipersonal" },
  { icon: Coffee, text: "Café incluido" },
  { icon: CupSoda, text: "Vasos, mates y tazas disponibles" },
]

const idealFor = [
  "Podcasts",
  "Streaming en vivo",
  "Entrevistas",
  "YouTube",
  "Programas deportivos",
  "Charlas",
  "Creadores de contenido",
]

export function StudioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="estudio" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00D9FF]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C85CFF]/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#F5F5F5]">Todo listo para </span>
            <span className="gradient-text">grabar</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed text-pretty">
            En MZTH Estudio te brindamos un espacio profesional y cómodo para que solo tengas que enfocarte en crear contenido.
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-1 bg-gradient-to-r from-[#00D9FF] to-[#C85CFF] rounded-full" />
            Equipamiento Profesional
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-[#222222] neon-border-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#C85CFF]/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_25px_rgba(0,217,255,0.3)] transition-all duration-300">
                  <item.icon className="w-7 h-7 text-[#00D9FF] group-hover:text-[#00D9FF]" />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[#F5F5F5] text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#A1A1AA]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Studio Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-[#C85CFF] to-[#00D9FF] rounded-full" />
            El Estudio
          </h3>
          <div className="flex flex-col gap-3 lg:gap-5">
            {/* Fila superior: 3 fotos verticales */}
            <div className="grid grid-cols-3 gap-3 lg:gap-5">
              {[
                { src: "/studio/foto1.jpeg", alt: "Estudio MZTH - Vista general" },
                { src: "/studio/foto2.jpeg", alt: "Estudio MZTH - Setup de micrófonos" },
                { src: "/studio/foto8.jpeg", alt: "Estudio MZTH - Cámara" },
              ].map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#222222] hover:border-[#00D9FF]/40 transition-all duration-300 group shadow-lg"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
                </motion.div>
              ))}
            </div>

            {/* Fila inferior: foto horizontal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.01 }}
              className="relative aspect-[16/7] rounded-2xl overflow-hidden border border-[#222222] hover:border-[#00D9FF]/40 transition-all duration-300 group shadow-lg"
            >
              <img
                src="/studio/foto9.jpeg"
                alt="Estudio MZTH - Iluminación"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
            </motion.div>
          </div>
        </motion.div>

        {/* Amenities & Ideal For - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-3xl p-8 border border-[#222222]"
          >
            <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-[#C85CFF] to-[#00D9FF] rounded-full" />
              Comodidades
            </h3>

            <div className="space-y-4">
              {amenities.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center group-hover:bg-[#00D9FF]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <span className="text-[#F5F5F5] font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ideal For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-3xl p-8 border border-[#222222]"
          >
            <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-[#00D9FF] to-[#C85CFF] rounded-full" />
              Ideal Para
            </h3>

            <div className="flex flex-wrap gap-3">
              {idealFor.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00D9FF]/10 to-[#C85CFF]/10 border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 text-[#F5F5F5] font-medium text-sm cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Additional Visual */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#00D9FF]/5 to-[#C85CFF]/5 border border-[#222222]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#00D9FF] animate-pulse" />
                <span className="text-sm text-[#A1A1AA]">
                  Espacio versátil adaptado a tu tipo de contenido
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
