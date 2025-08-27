import { Clock, MapPin, Users, Bell, CheckCircle, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface QueueTrackerProps {
  serviceName: string;
  location: string;
  yourPosition: number;
  totalInQueue: number;
  estimatedWait: string;
  status: "waiting" | "called" | "served";
}

export const QueueTracker = ({
  serviceName,
  location,
  yourPosition,
  totalInQueue,
  estimatedWait,
  status
}: QueueTrackerProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleEnableNotifications = () => {
    if (!notificationsEnabled) {
      if ("Notification" in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            setNotificationsEnabled(true);
            toast({
              title: "Notifications Enabled!",
              description: "You'll be notified when your turn is approaching.",
            });
          } else {
            toast({
              title: "Notifications Denied",
              description: "Please enable notifications in your browser settings.",
              variant: "destructive",
            });
          }
        });
      } else {
        toast({
          title: "Notifications Not Supported",
          description: "Your browser doesn't support notifications.",
          variant: "destructive",
        });
      }
    } else {
      setNotificationsEnabled(false);
      toast({
        title: "Notifications Disabled",
        description: "You won't receive queue notifications.",
      });
    }
  };

  const handleLeaveQueue = () => {
    localStorage.removeItem('currentQueue');
    toast({
      title: "Left Queue",
      description: "You have successfully left the queue.",
    });
    navigate('/');
  };

  const handleGoHome = () => {
    navigate('/');
  };
  const progress = ((totalInQueue - yourPosition) / totalInQueue) * 100;
  
  const getStatusConfig = () => {
    switch (status) {
      case "waiting":
        return {
          color: "bg-info text-info-foreground",
          icon: Clock,
          message: "You're in line"
        };
      case "called":
        return {
          color: "bg-warning text-warning-foreground",
          icon: Bell,
          message: "Your turn is next!"
        };
      case "served":
        return {
          color: "bg-success text-success-foreground",
          icon: CheckCircle,
          message: "Visit completed"
        };
      default:
        return {
          color: "bg-muted text-muted-foreground",
          icon: Clock,
          message: "Status unknown"
        };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{serviceName}</CardTitle>
          <Badge className={statusConfig.color}>
            <StatusIcon className="h-3 w-3 mr-1" />
            {statusConfig.message}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            #{yourPosition}
          </div>
          <p className="text-muted-foreground">Your position in queue</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Queue Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-2xl font-semibold text-foreground">{totalInQueue}</div>
            <p className="text-xs text-muted-foreground">Total in queue</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-2xl font-semibold text-foreground">{estimatedWait}</div>
            <p className="text-xs text-muted-foreground">Est. wait time</p>
          </div>
        </div>

        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleEnableNotifications}
          >
            <Bell className="mr-2 h-4 w-4" />
            {notificationsEnabled ? "Disable Notifications" : "Enable Notifications"}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full text-destructive"
            onClick={handleLeaveQueue}
          >
            Leave Queue
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleGoHome}
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};