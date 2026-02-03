import InfinityLoader from '@/components/ui/InfinityLoader';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <InfinityLoader size={80} />
      <span className="mt-4 text-sm tracking-wide text-muted-foreground">
        Infiniota
      </span>
    </div>
  );
}
