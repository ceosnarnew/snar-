import ComingSoon from "@/components/ui/coming-soon";

export const metadata = {
  title: "Collections — SNAR",
  description: "All SNAR collections. Coming soon.",
};

export default function CollectionsPage() {
  return (
    <ComingSoon
      category="ALL COLLECTIONS"
      tagline="Curated Drops"
      accentWord="COLLECTIONS"
      description="Tracksuits, hoodies, tees, and more — every collection curated for peak performance. Stay tuned."
    />
  );
}