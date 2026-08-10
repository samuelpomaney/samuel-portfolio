interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function PremiumCard({
  children,
  className = "",
}: PremiumCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[var(--glass-border)]
        bg-[var(--glass-bg)]
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[var(--primary)]
        ${className}
      `}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          bg-gradient-to-br
          from-[var(--primary)]/10
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">

        {children}

      </div>
    </div>
  );
}