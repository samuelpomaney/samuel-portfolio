export const glassCard = `
group
relative
h-full
overflow-hidden
rounded-[32px]
border
border-[var(--glass-border)]
bg-[var(--glass-bg)]
p-10
transition-all
duration-500
hover:-translate-y-2
hover:border-[var(--primary)]
hover:shadow-[0_25px_70px_rgba(253,158,4,.18)]
`;

export const iconBox = `
mb-10
flex
h-16
w-16
items-center
justify-center
rounded-2xl
border
border-[var(--glass-border)]
bg-[var(--glass-bg)]
transition-all
duration-500
group-hover:scale-110
group-hover:rotate-6
`;

export const primaryButton = `
mt-10
inline-flex
items-center
gap-2
rounded-full
bg-[var(--primary)]
px-7
py-3
font-semibold
text-black
transition-all
duration-300
hover:gap-4
hover:shadow-lg
hover:shadow-[var(--primary)]/30
`;

export const sectionPadding = `
relative
overflow-hidden
py-28
`;

export const glassBorder = `
border
border-[var(--glass-border)]
`;

export const glassBackground = `
bg-[var(--glass-bg)]
`;

export const sectionTitle = `
text-4xl
font-bold
tracking-tight
`;

export const bodyText = `
mt-6
text-base
leading-9
text-[var(--muted)]
`;