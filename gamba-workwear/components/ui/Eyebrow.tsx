export default function Eyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className="h-px w-8 bg-gold-500" />
      <span className="tag-label text-xs text-gold-400">{children}</span>
    </div>
  );
}
