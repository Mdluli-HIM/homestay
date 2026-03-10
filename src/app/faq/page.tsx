import { PageMotion } from "@/components/motion/page-motion";
import { FAQPage } from "@/components/faq/faq-page";

export default function FAQRoutePage() {
  return (
    <PageMotion className="page-flow">
      <FAQPage />
    </PageMotion>
  );
}
