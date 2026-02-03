import AppImage from '@/components/ui/AppImage';

interface Industry {
  id: string;
  name: string;
  image: string;
  alt: string;
  size: 'large' | 'medium' | 'small';
}

const IndustriesSection = () => {
  const industries: Industry[] = [
  {
    id: 'industry_hotel',
    name: 'Hotels & Hospitality',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1576b79a6-1767737860975.png",
    alt: 'Luxury hotel lobby with modern interior design and ambient lighting',
    size: 'large'
  },
  {
    id: 'industry_restaurant',
    name: 'Restaurants & Cafes',
    image: "https://images.unsplash.com/photo-1672870634122-6ea7b16d2bb4",
    alt: 'Modern restaurant interior with elegant table settings and warm atmosphere',
    size: 'medium'
  },
  {
    id: 'industry_fitness',
    name: 'Fitness & Wellness',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_113754fcf-1769698868562.png",
    alt: 'Fitness gym with modern equipment and people exercising',
    size: 'medium'
  },
  {
    id: 'industry_education',
    name: 'Education & Training',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d0c03c4-1764661565834.png",
    alt: 'Students in modern classroom with laptops and collaborative learning environment',
    size: 'small'
  },
  {
    id: 'industry_corporate',
    name: 'Corporate & Startups',
    image: "https://images.unsplash.com/photo-1503797172624-decbe212fdb5",
    alt: 'Modern corporate office with glass walls and professional team working',
    size: 'small'
  },
  {
    id: 'industry_services',
    name: 'Service Businesses',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17af82dbe-1768701648346.png",
    alt: 'Service professionals in modern workspace with digital tools',
    size: 'large'
  }];


  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return '';
    }
  };

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Industries We Serve
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Built for <span className="text-primary font-normal italic">Every</span> Business
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            From hospitality to corporate solutions, we create digital
            experiences tailored to your industry's unique needs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {industries.map((industry) =>
          <div
            key={industry.id}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer ${getSizeClasses(
              industry.size
            )}`}>

              <AppImage
              src={industry.image}
              alt={industry.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent group-hover:from-primary/90 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-2xl font-serif font-light text-white">
                  {industry.name}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default IndustriesSection;