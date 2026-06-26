import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import PatientQueue from "../components/dashboard/PatientQueue";
import QuickActions from "../components/dashboard/QuickActions";
import SyncLog from "../components/dashboard/SyncLog";
import ClinicOverview from "../components/dashboard/ClinicOverview";
import NotificationList from "../components/dashboard/NotificationList";

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto bg-[#F8FAFC] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        <DashboardHeader />

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <div className="lg:col-span-8">
            <PatientQueue />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <QuickActions />
            <SyncLog />
          </div>

        </div>

        <ClinicOverview />

        <NotificationList />

      </div>
    </main>
  );
}