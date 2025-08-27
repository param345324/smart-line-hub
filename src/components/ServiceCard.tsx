import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ServiceCardProps {
  name: string;
  location: string;
  currentWait: string;
  queueLength: number;
  category: "hospital" | "government" | "clinic";
  status: "open" | "busy" | "closed";
}

export const ServiceCard = ({ 
  name, 
  location, 
  currentWait, 
  queueLength, 
  category, 
  status 
}: ServiceCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleJoinQueue = () => {
    if (status === "closed") return;
    
    // Store service data in localStorage for the dashboard
    const serviceData = {
      name,
      location,
      queueLength,
      currentWait,
      category,
      status
    };
    localStorage.setItem('currentQueue', JSON.stringify(serviceData));
    
    toast({
      title: "Joined Queue Successfully!",
      description: `You're now #${queueLength + 1} in line at ${name}`,
    });
    
    // Navigate to dashboard after a short delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };
  const getStatusColor = () => {
    switch (status) {
      case "open": return "bg-success text-success-foreground";
      case "busy": return "bg-warning text-warning-foreground";
      case "closed": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = () => {
    return category === "hospital" ? "🏥" : category === "government" ? "🏛️" : "🏥";
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{getCategoryIcon()}</span>
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </div>
            </div>
          </div>
          <Badge className={getStatusColor()}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-foreground font-medium">{currentWait} wait</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-foreground">{queueLength} in queue</span>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full" 
          disabled={status === "closed"}
          variant={status === "closed" ? "secondary" : "default"}
          onClick={handleJoinQueue}
        >
          {status === "closed" ? "Closed" : "Join Queue"}
          {status !== "closed" && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </CardContent>
    </Card>
  );
};