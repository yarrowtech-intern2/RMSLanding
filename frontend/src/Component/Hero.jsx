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
      className="relative h-auto sm:min-h-[90vh] lg:min-h-screen bg-[#F0F7FF] pt-14 sm:pt-24 pb-4 lg:pb-12 overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] -left-[5%] w-[50%] h-[50%] bg-blue-400/15 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] -right-[5%] w-[40%] h-[40%] bg-orange-300/15 blur-[130px] rounded-full animate-float-slow" />
      </div>

      <div className="max-w-7xl min-[1700px]:max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col lg:flex-row items-center relative z-10 gap-2 sm:gap-0">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left lg:pr-12" data-aos="fade-right">
          {/* Version Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-white shadow-md mb-6 sm:mb-8 animate-fade-in"
            data-aos="fade-down"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF764D] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#1A1A1A]">Retail Management System</span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-[4.2rem] font-black text-[#1A1A1A] leading-[1.1] sm:leading-[1] mb-6 sm:mb-8 tracking-tighter" data-aos="fade-up">
            A unified digital <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF764D] to-[#FF9D80]">platform</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed font-bold opacity-90" data-aos="fade-up" data-aos-delay="100">
            Elevate your retail operations with a connected digital ecosystem. 
            Automate workflows and coordinate teams in real-time.
          </p>

          
          {/* Feature Badges - 2x2 grid with background card effect */}
          <div className="relative group max-w-lg mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-white/30 backdrop-blur-md rounded-[2.5rem] border border-white/50 shadow-inner -z-10" />
            <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:gap-x-12 py-2">
              {heroFeatures.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={i} 
                    className="flex items-center justify-start space-x-3 sm:space-x-4 group cursor-pointer"
                    data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={100 + (i * 50)}
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-xl shadow-blue-100/40 border border-white flex items-center justify-center text-[#FF764D] transition-all group-hover:scale-110 group-hover:shadow-orange-100">
                       <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                      <p className="text-[#1A1A1A] font-black text-[11px] sm:text-[15px] tracking-tight leading-none mb-1">{item.label}</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Active</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Content - Character */}
        <div className="flex-1 mt-0 sm:mt-20 lg:mt-0 relative w-full flex justify-center items-center" data-aos="fade-left">
          
          {/* Decorative Elements - Increased back to full scale */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] sm:w-[105%] sm:h-[105%] border-2 border-blue-300/20 rounded-[3.5rem] sm:rounded-[5rem] rotate-[10deg] -z-10 animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] sm:w-[100%] sm:h-[100%] border-2 border-orange-200/20 rounded-[4rem] sm:rounded-[6rem] -rotate-[15deg] -z-10 animate-float-slow" />

          {/* Main Character - Increased Size for better visibility on mobile */}
          <div className="relative z-10 w-full max-w-[320px] sm:max-w-md lg:max-w-lg min-[1700px]:max-w-xl">
            <div className="relative group">
              <div className="absolute -inset-12 bg-gradient-to-tr from-blue-400/20 to-orange-400/20 blur-[80px] opacity-60 group-hover:opacity-90 transition-opacity duration-1000 pointer-events-none" />
              <img
                src={heroImage}
                alt="RMS Character"
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10 animate-float rounded-[2.5rem] sm:rounded-[4rem]"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
