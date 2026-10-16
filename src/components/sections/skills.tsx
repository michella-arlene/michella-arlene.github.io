import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skills } from "@/content/site";

export function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <InfiniteMovingCards items={skills} speed="slow" className="max-w-none" />
    </div>
  );
}
