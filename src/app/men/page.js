import ComingSoon from "@/components/ui/coming-soon";

export const metadata = {
  title: "Men's Collection — SNAR",
  description: "Premium performance sportswear for men. Coming soon.",
};

export default function MenPage() {
  return (
    <ComingSoon
      category="MEN'S COLLECTION"
      tagline="Performance Sportswear"
      accentWord="COLLECTION"
      description="Our men's performance line is being engineered to the highest standard. Built for athletes who refuse to settle."
    />
  );
}