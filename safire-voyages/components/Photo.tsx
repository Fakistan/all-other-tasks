import Needle from "./Needle";

// Shows a photo when one is set, otherwise a quiet tonal placeholder so
// layouts can be reviewed before real images arrive.
export default function Photo({
  src,
  tone,
  alt,
  className = "",
}: {
  src?: string;
  tone: string;
  alt: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`photo ${className}`} role="img" aria-label={alt} style={{ backgroundImage: `url(${src})` }} />
    );
  }
  return (
    <div
      className={`photo photo--placeholder ${className}`}
      role="img"
      aria-label={alt}
      style={{
        background: `radial-gradient(120% 90% at 70% 10%, color-mix(in srgb, ${tone} 55%, #F4EFE4) 0%, ${tone} 50%, color-mix(in srgb, ${tone} 55%, #0F2A5C) 100%)`,
      }}
    >
      <Needle className="photo__mark" />
    </div>
  );
}
