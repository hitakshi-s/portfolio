export function GrainTexture() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[3] hidden md:block"
      style={{
        opacity: 0.028,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23g)'/%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px',
        animation: 'grain-flicker 0.9s steps(7, end) infinite',
      }}
    />
  )
}
