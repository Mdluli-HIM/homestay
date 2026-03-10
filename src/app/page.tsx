import { PageMotion } from "@/components/motion/page-motion";
import { HomeHero } from "@/components/home/home-hero";
import { RoomPreview } from "@/components/home/room-preview";
import { StayHighlights } from "@/components/home/stay-highlights";

export default function HomePage() {
  return (
    <PageMotion className="page-flow">
      <HomeHero />
      <RoomPreview />
      <StayHighlights />
    </PageMotion>
  );
}
