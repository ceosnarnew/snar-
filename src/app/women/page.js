import ComingSoon from "@/components/ui/coming-soon";

export const metadata = {
  title: "Women's Collection — SNAR",
  description: "Premium performance sportswear for women. Coming soon.",
};

export default function WomenPage() {
  return (
    <ComingSoon
      category="WOMEN'S COLLECTION"
      tagline="Performance Sportswear"
      accentWord="COLLECTION"
      description="Engineered for the female athlete. Every cut, every fabric tested under real training conditions. Dropping soon."
    />
  );
}