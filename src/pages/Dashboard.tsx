import { QueueTracker } from "@/components/QueueTracker";
import { Header } from "@/components/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Queue Status</h1>
          <p className="text-muted-foreground">Track your position and estimated wait time</p>
        </div>
        
        <QueueTracker
          serviceName="City General Hospital"
          location="Downtown Medical District"
          yourPosition={3}
          totalInQueue={12}
          estimatedWait="15 min"
          status="waiting"
        />
      </div>
    </div>
  );
};

export default Dashboard;