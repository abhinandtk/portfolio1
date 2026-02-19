export default function MarqueeBanner() {
  const technologies = [
    'Python', 'Django', 'React.js', 'Next.js', 'PostgreSQL', 
    'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Redux', 
    'JWT', 'GitHub Actions', 'Docker', 'Stripe'
  ]
  const items = [...technologies, ...technologies]

  return (
    <div className="border-y border-white/5 overflow-hidden py-6 bg-dim/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-12 text-sm md:text-xl tracking-[0.2em] uppercase font-serif italic text-ivory/60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
