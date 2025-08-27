import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  const services = [
    {
      name: "City General Hospital",
      location: "Downtown Medical District",
      currentWait: "15 min",
      queueLength: 8,
      category: "hospital" as const,
      status: "open" as const
    },
    {
      name: "DMV - Vehicle Registration",
      location: "Main Street Office",
      currentWait: "25 min",
      queueLength: 12,
      category: "government" as const,
      status: "busy" as const
    },
    {
      name: "Westside Family Clinic",
      location: "West End Plaza",
      currentWait: "5 min",
      queueLength: 3,
      category: "clinic" as const,
      status: "open" as const
    },
    {
      name: "Social Security Office",
      location: "Federal Building",
      currentWait: "Closed",
      queueLength: 0,
      category: "government" as const,
      status: "closed" as const
    },
    {
      name: "Metro Health Center",
      location: "Central Avenue",
      currentWait: "10 min",
      queueLength: 5,
      category: "hospital" as const,
      status: "open" as const
    },
    {
      name: "City Permits Office",
      location: "City Hall",
      currentWait: "20 min",
      queueLength: 9,
      category: "government" as const,
      status: "busy" as const
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Available Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find and join queues at hospitals, clinics, and government offices near you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};