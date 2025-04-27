import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import BloodTypeCard from "@/components/BloodTypeCard";
import DiseasesSection from "@/components/DiseasesSection";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <InfoSection />
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Основные группы крови</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Выберите свою группу крови, чтобы узнать о потенциальных рисках и особенностях здоровья
              </p>
            </div>
            
            <Tabs defaultValue="o-positive" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
                <TabsTrigger value="o-positive">I(0) Rh+</TabsTrigger>
                <TabsTrigger value="a-positive">II(A) Rh+</TabsTrigger>
                <TabsTrigger value="b-positive">III(B) Rh+</TabsTrigger>
                <TabsTrigger value="ab-positive">IV(AB) Rh+</TabsTrigger>
              </TabsList>
              
              <TabsContent value="o-positive">
                <BloodTypeCard 
                  group="I(0)" 
                  rhesus="Rh+" 
                  description="Самая распространенная группа крови. Универсальные доноры."
                  prevalence="36% населения России"
                  riskDiseases={["Язвенная болезнь", "Гастрит", "Малярия"]}
                  protectiveDiseases={["Тромбоз", "Ишемическая болезнь сердца", "Сахарный диабет 2 типа"]}
                />
              </TabsContent>
              
              <TabsContent value="a-positive">
                <BloodTypeCard 
                  group="II(A)" 
                  rhesus="Rh+" 
                  description="Вторая по распространенности группа крови."
                  prevalence="28% населения России"
                  riskDiseases={["Ишемическая болезнь сердца", "Рак желудка", "Тромбоз"]}
                  protectiveDiseases={["Язвенная болезнь", "Малярия"]}
                />
              </TabsContent>
              
              <TabsContent value="b-positive">
                <BloodTypeCard 
                  group="III(B)" 
                  rhesus="Rh+" 
                  description="Распространена в Азии и Центральной Европе."
                  prevalence="19% населения России"
                  riskDiseases={["E. coli инфекции", "Панкреатит", "Когнитивные нарушения"]}
                  protectiveDiseases={["Рак желудка", "Некоторые инфекции"]}
                />
              </TabsContent>
              
              <TabsContent value="ab-positive">
                <BloodTypeCard 
                  group="IV(AB)" 
                  rhesus="Rh+" 
                  description="Самая редкая группа крови. Универсальные реципиенты."
                  prevalence="7% населения России"
                  riskDiseases={["Рак поджелудочной", "Когнитивные нарушения", "Сердечно-сосудистые заболевания"]}
                  protectiveDiseases={["Некоторые инфекционные заболевания"]}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <DiseasesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;