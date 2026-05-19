import { FC } from "react";

const TrustBadges: FC = () => {
  const badges = [
    { icon: "✓", label: "100% Pure" },
    { icon: "✓", label: "No Preservatives" },
    { icon: "✓", label: "Homemade" },
    { icon: "✓", label: "Maharashtra's Taste" },
  ];

  return (
    <section className="bg-brand-maroon text-white py-12">
      <div className="brand-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl mb-2 font-bold text-brand-gold">
                {badge.icon}
              </div>
              <p className="font-semibold">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
