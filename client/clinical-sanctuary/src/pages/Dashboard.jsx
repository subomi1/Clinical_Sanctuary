import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
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

        <DashboardStats />

        {/* Patient Queue (Full Width) */}
        <PatientQueue />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuickActions />
          <SyncLog />
        </div>

        {/* Bottom Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ClinicOverview />
          <NotificationList />
        </div>

      </div>
    </main>
  );
}