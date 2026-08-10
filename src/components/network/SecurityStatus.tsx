"use client";

import { motion } from "framer-motion";

const services = [
  {
    name: "Firewall",
    status: "ACTIVE",
    color: "text-green-500",
    bg: "bg-green-500/15",
  },
  {
    name: "Authentication",
    status: "VERIFIED",
    color: "text-green-500",
    bg: "bg-green-500/15",
  },
  {
    name: "Linux Server",
    status: "ONLINE",
    color: "text-green-500",
    bg: "bg-green-500/15",
  },
  {
    name: "Database",
    status: "ENCRYPTED",
    color: "text-green-500",
    bg: "bg-green-500/15",
  },
];

export default function SecurityStatus() {
  return (
    <div className="mt-6 space-y-4">

      {services.map((service, index) => (

        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
          }}
          whileHover={{
            scale: 1.02,
          }}
          className="flex items-center justify-between rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-3 backdrop-blur-xl"
        >

          <div className="flex items-center gap-3">

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, .4, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-3 w-3 rounded-full bg-green-500"
            />

            <span className="font-medium">
              {service.name}
            </span>

          </div>

          <span className={`${service.bg} ${service.color} rounded-full px-3 py-1 text-xs font-semibold`}>
            {service.status}
          </span>

        </motion.div>

      ))}

    </div>
  );
}