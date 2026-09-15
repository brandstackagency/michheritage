const marqueeItems = [
  { icon: 'ri-seedling-line', label: 'ROOTED' },
  { icon: null, label: '·' },
  { icon: 'ri-vip-crown-line', label: 'REGAL' },
  { icon: null, label: '·' },
  { icon: 'ri-hourglass-line', label: 'TIMELESS' },
  { icon: null, label: '·' },
  { icon: 'ri-leaf-line', label: 'FEMININE' },
  { icon: null, label: '·' },
  { icon: 'ri-scissors-line', label: 'CRAFTED' },
  { icon: null, label: '·' },
];

const allItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

export default function MarqueeBanner() {
  return (
    <div className="bg-primary-950 py-3.5 overflow-hidden border-y border-primary-800/40">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {allItems.map((item, i) =>
          item.icon ? (
            <span key={i} className="flex items-center gap-2 mx-4">
              <span className="flex items-center justify-center w-3.5 h-3.5">
                <i className={`${item.icon} text-accent-400 text-xs`} aria-hidden="true"></i>
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-background-50/70">
                {item.label}
              </span>
            </span>
          ) : (
            <span key={i} className="text-accent-400/50 mx-1 text-xs">{item.label}</span>
          )
        )}
      </div>
    </div>
  );
}