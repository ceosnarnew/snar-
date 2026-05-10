import ComingSoon from "@/components/ui/coming-soon";

export const metadata = {
  title: "Accessories — SNAR",
  description: "Premium sportswear accessories. Coming soon.",
};

export default function AccessoriesPage() {
  return (
    <ComingSoon
      category="ACCESSORIES"
      tagline="Complete Your Kit"
      accentWord="ACCESSORIES"
      description="Bags, caps, socks, and gear that match our performance standard. The complete kit drops soon."
    />
  );
}