"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import PremiumCard from "../ui/PremiumCard";
import CertificateStatus from "./CertificateStatus";
import { fadeUp } from "@/lib/animations";

interface Props {
  certificate: {
    title: string;
    provider: string;
    status: string;
    skills: string[];
    href: string;
  };
}

export default function CertificateCard({ certificate }: Props) {
  return (
    <motion.div {...(fadeUp as any)}>
      <PremiumCard className="group flex h-full flex-col rounded-[30px] p-8 transition-all duration-500 hover:-translate-y-3">

        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]"
        >
          <ShieldCheck
            size={28}
            aria-hidden="true"
            className="text-[var(--primary)]"
          />
        </motion.div>

        <CertificateStatus status={certificate.status} />

        <h3 className="mt-6 text-2xl font-bold leading-tight">
          {certificate.title}
        </h3>

        <p className="mt-2 font-medium text-[var(--primary)]">
          {certificate.provider}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {certificate.skills.map((skill) => (

            <motion.span
              whileHover={{ scale: 1.08 }}
              key={skill}
              className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1 text-sm"
            >
              {skill}
            </motion.span>

          ))}

        </div>

      </PremiumCard>
    </motion.div>
  );
}