import { Clock, Smartphone, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Skip the Wait,
            <span className="text-primary"> Save Your Time</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            NoQueue revolutionizes how you access healthcare and government services. 
            Join queues remotely, track your position in real-time, and get notified when it's your turn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Join a Queue Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => {
                const howItWorksSection = document.getElementById('how-it-works');
                if (howItWorksSection) {
                  howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center p-6 border-0 shadow-lg bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-muted-foreground">
                Know exactly where you are in line and when your turn is coming up
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="bg-secondary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Notifications</h3>
              <p className="text-muted-foreground">
                Get alerted when it's almost your turn - no more sitting and waiting
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="bg-info/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-info" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Sector Support</h3>
              <p className="text-muted-foreground">
                Hospitals, clinics, DMV, city hall - all your queues in one place
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};