export const Meteors = ({ number = 10 }: { number?: number }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: number }).map((_, idx) => (
        <span
          key={idx}
          className="absolute left-1/2 top-0 h-0.5 w-0.5 animate-meteor rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]"
          style={{
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 3}s`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <div className="absolute top-1/2 h-px w-[50px] -translate-y-1/2 bg-linear-to-r from-white to-transparent" />
        </span>
      ))}
    </div>
  );
};
