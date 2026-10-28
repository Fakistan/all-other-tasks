import DestinationSlider from "@/components/DestinationSlider";
import WhatsAppButton from "@/components/WhatsAppButton";
import { destinations } from "@/content/destinations";

export default function Home() {
  return (
    <main>
      <DestinationSlider destinations={destinations} />
      <WhatsAppButton />
    </main>
  );
}
