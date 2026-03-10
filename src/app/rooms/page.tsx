import { PageMotion } from "@/components/motion/page-motion";
import { RoomsIndex } from "@/components/rooms/rooms-index";

export default function RoomsPage() {
  return (
    <PageMotion className="page-flow">
      <RoomsIndex />
    </PageMotion>
  );
}
