import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import DiseasesSection from "@/components/DiseasesSection";
import Footer from "@/components/Footer";

const DiseasesPage = () => {
  return (
    <>
      <Helmet>
        <title>Заболевания и группы крови | ГруппыКрови.рф</title>
        <meta 
          name="description" 
          content="Изучите связь между группами крови и предрасположенностью к различным заболеваниям" 
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Заболевания и группы крови
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
              Научные исследования выявили корреляции между группами крови и предрасположенностью
              к различным заболеваниям. Изучите подробную информацию в разделах ниже.
            </p>
          </div>
          
          <DiseasesSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DiseasesPage;