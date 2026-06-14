import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { TrustBadges } from "@/components/TrustBadges";
import { CategoryGrid } from "@/components/CategoryGrid";
import { BestSellers } from "@/components/BestSellers";
import { BrandStory } from "@/components/BrandStory";
import { Reviews } from "@/components/Reviews";
import { InstagramFeed } from "@/components/InstagramFeed";
import { EmailCTA } from "@/components/EmailCTA";
import { Footer } from "@/components/Footer";
import { ReelsSlider } from "@/components/ReelsSlider";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palm Malen Gift Shop | Curated Gifts & Unique Finds" },
      { name: "description", content: "Discover curated gifts, premium books, fashion accessories, and unique finds at Palm Malen Gift Shop. Free shipping on orders over $50." },
      { property: "og:title", content: "Palm Malen Gift Shop | Curated Gifts & Unique Finds" },
      { property: "og:description", content: "Discover curated gifts, premium books, fashion accessories, and unique finds at Palm Malen Gift Shop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <HeroSlider />
        <TrustBadges />
        <CategoryGrid />
        <BestSellers />
        <ReelsSlider />
        <BrandStory />
        <WhyChooseUs />
        <Reviews />
        <InstagramFeed />
        <EmailCTA />
      </main>
      <Footer />
    </div>
  );
}
