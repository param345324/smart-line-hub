import { Smartphone, MapPin, Clock, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Find & Select",
      description: "Browse available services near you and select the one you need",
      step: "01"
    },
    {
      icon: Smartphone,
      title: "Join Queue",
      description: "Reserve your spot in line instantly from anywhere using your phone",
      step: "02"
    },
    {
      icon: Clock,
      title: "Track Progress",
      description: "Watch your position in real-time and see accurate wait time estimates",
      step: "03"
    },
    {
      icon: Bell,
      title: "Get Notified",
      description: "Receive alerts when your turn is approaching - no more waiting around",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How NoQueue Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, fast, and efficient - get in line without the wait
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg relative overflow-hidden">
                <CardContent className="pt-8 pb-6">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10">
                    {step.step}
                  </div>
                  <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};