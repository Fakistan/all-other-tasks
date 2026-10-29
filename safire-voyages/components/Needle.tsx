export default function Needle({ className = "needle" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 28" width="10" height="24" aria-hidden="true">
      <path d="M6 0 10 14 6 28 2 14Z" fill="#D4AF5A" />
      <circle cx="6" cy="14" r="1.6" fill="#F4EFE4" />
    </svg>
  );
}
