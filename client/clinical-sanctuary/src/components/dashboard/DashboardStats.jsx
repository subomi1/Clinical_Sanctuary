import StatsCard from "./StatsCard";

import { stats } from "../../data/dashboardData";

export default function DashboardStats() {
  return (
    <section
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      gap-6
      "
    >
      {stats.map((card) => (
        <StatsCard key={card.title} {...card} />
      ))}
    </section>
  );
}
