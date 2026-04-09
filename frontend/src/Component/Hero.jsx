import { 
  BarChart3, 
  Users, 
  Package, 
  Zap 
} from "lucide-react";
import heroImage from "../assets/rms_hero.png";

const Hero = () => {
  const heroFeatures = [
    { label: "Real-time Analytics", icon: BarChart3 },
    { label: "100% Coordination", icon: Users },
    { label: "Inventory Control", icon: Package },
    { label: "Fast Automation", icon: Zap },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-[85vh] bg-blue-100 pt-28 pb-20"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-orange-200/20 blur-[100px] rounded-full animate-float opacity-70" />
        <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-blue-300/10 blur-[120px] rounded-full animate-float-slow" />
        
        {/* 3D Floating Shapes */}
        <div className="absolute top-1/4 left-[5%] w-24 h-24 bg-white/20 border border-white/30 rounded-3xl backdrop-blur-md rotate-12 animate-float shadow-2xl" />
        <div className="absolute bottom-1/4 right-[8%] w-32 h-32 bg-orange-50/10 border border-orange-100/20 rounded-[2rem] -rotate-12 animate-float-slow shadow-xl" />
        
        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl min-[1700px]:max-w-5xl mx-auto px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left lg:pr-16" data-aos="fade-right">
          {/* Version Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-sm mb-8 animate-fade-in"
            data-aos="fade-down"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF764D] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Retail Management System</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.8rem] min-[1700px]:text-[2.2rem] font-extrabold text-[#1A1A1A] leading-[1.1] sm:leading-[1] mb-4 tracking-tight" data-aos="fade-up">
            A unified digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF764D] to-orange-400">platform</span>
          </h1>

          <p className="text-gray-500 text-lg lg:text-xl min-[1700px]:text-[12px] max-w-xl min-[1700px]:max-w-xs mx-auto lg:mx-0 mb-5 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="200">
            Elevate your retail operations with a connected digital ecosystem. 
            Automate workflows and coordinate teams seamlessly in real-time.
          </p>

          
          {/* Feature Badges - Precisely 2x2 grid match, centered on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 max-w-lg mx-auto lg:mx-0 border-t border-gray-100 pt-6">
            {heroFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="flex items-center sm:justify-start justify-center space-x-4 group"
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={400 + (i * 150)}
                >
                  <div className="flex-shrink-0 w-12 h-12 min-[1700px]:w-10 min-[1700px]:h-10 rounded-2xl bg-white shadow-xl shadow-blue-100/20 border border-white flex items-center justify-center text-[#FF764D] transition-all group-hover:scale-110 group-hover:rotate-6">
                     <Icon className="w-5 h-5 min-[1700px]:w-4 min-[1700px]:h-4" strokeWidth={2.5} />
                  </div>
                  <div className="text-left">
                    <p className="text-[#1A1A1A] font-black text-sm min-[1700px]:text-[11px] tracking-tight">{item.label}</p>
                    <p className="text-xs min-[1700px]:text-[9px] text-gray-400 font-bold uppercase">Enabled</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content - Character + Decorative Rects */}
        <div className="flex-1 mt-16 lg:mt-0 relative w-full flex justify-center items-center" data-aos="fade-left">
          
          {/* Decorative Rectangles (Reference Image Style) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border-2 border-blue-200/30 rounded-[4rem] rotate-[10deg] -z-10 animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-orange-100/30 rounded-[5rem] -rotate-[15deg] -z-10 animate-float-slow" />

          {/* Main Character */}
          <div className="relative z-10 w-full max-w-lg lg:max-w-xl min-[1700px]:max-w-[300px]">
            <div className="relative group">
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 to-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={heroImage}
                alt="RMS Character"
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10 animate-float rounded-[3rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
