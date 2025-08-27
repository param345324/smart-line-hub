import { QueueTracker } from "@/components/QueueTracker";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface QueueData {
  name: string;
  location: string;
  queueLength: number;
  currentWait: string;
  category: string;
  status: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [queueData, setQueueData] = useState<QueueData | null>(null);
  const [userPosition, setUserPosition] = useState(3);
  const [totalInQueue, setTotalInQueue] = useState(12);

  useEffect(() => {
    const storedData = localStorage.getItem('currentQueue');
    if (storedData) {
      const data = JSON.parse(storedData);
      setQueueData(data);
      // Simulate user being added to queue
      setUserPosition(Math.floor(Math.random() * 5) + 1);
      setTotalInQueue(data.queueLength + Math.floor(Math.random() * 3) + 1);
    } else {
      // If no queue data, redirect to home
      navigate('/');
    }
  }, [navigate]);

  if (!queueData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Loading your queue...</h2>
          <p className="text-muted-foreground">Please wait while we get your position.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Queue Status</h1>
          <p className="text-muted-foreground">Track your position and estimated wait time</p>
        </div>
        
        <QueueTracker
          serviceName={queueData.name}
          location={queueData.location}
          yourPosition={userPosition}
          totalInQueue={totalInQueue}
          estimatedWait={queueData.currentWait}
          status="waiting"
        />
      </div>
    </div>
  );
};

export default Dashboard;