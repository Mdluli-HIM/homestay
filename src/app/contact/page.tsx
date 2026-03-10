import { PageMotion } from "@/components/motion/page-motion";
import { ContactPage } from "@/components/contact/contact-page";

export default function ContactRoutePage() {
  return (
    <PageMotion className="page-flow">
      <ContactPage />
    </PageMotion>
  );
}
