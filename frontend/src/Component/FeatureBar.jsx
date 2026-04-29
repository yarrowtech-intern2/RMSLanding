import React from "react";
import { 
  BarChart3, 
  Package, 
  Users, 
  ShoppingCart, 
  Warehouse,
  Workflow
} from "lucide-react";

const FeatureBar = () => {
  const features = [
    {
      title: "Real-time Stats",
      desc: "Live sales and performance tracking",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Inventory",
      desc: "Smart stock level management",
      icon: <Warehouse className="w-8 h-8 text-orange-600" />,
      bg: "bg-orange-50"
    },
    {
      title: "Employee Hub",
      desc: "Coordination across all teams",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Sales Flow",
      desc: "Automated retail transaction hub",
      icon: <ShoppingCart className="w-8 h-8 text-orange-600" />,
      bg: "bg-orange-50"
    },
    {
      title: "Supply Chain",
      desc: "Vendors and logistics portal",
      icon: <Package className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50"
    }
  ];

  return (
    <div className="bg-blue-100 py-8">
      <div className="max-w-7xl min-[1700px]:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group relative"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 150}
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-[2rem] shadow-lg shadow-blue-200/30 border border-white transition-all group-hover:-translate-y-1.5 cursor-pointer h-full">
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-inner`}>
                  {React.cloneElement(feature.icon, { size: 24 })}
                </div>
                <h4 className="text-lg min-[1700px]:text-[13px] font-extrabold text-[#1A1A1A] mb-2 leading-tight">{feature.title}</h4>
                <p className="text-xs min-[1700px]:text-[10px] text-gray-500 font-bold leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
