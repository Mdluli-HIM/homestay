import { PageMotion } from "@/components/motion/page-motion";
import { StayPage } from "@/components/stay/stay-page";

export default function StayRoutePage() {
  return (
    <PageMotion className="page-flow">
      <StayPage />
    </PageMotion>
  );
}
