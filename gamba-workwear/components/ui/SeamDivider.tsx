export default function SeamDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`px-6 md:px-16 ${className}`} aria-hidden="true">
      <div className="seam" />
    </div>
  );
}
