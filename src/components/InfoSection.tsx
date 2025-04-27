import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, HeartPulse, Dna, BookOpen } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему группа крови имеет значение?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Современные исследования показывают, что группа крови может быть связана с 
            различными аспектами здоровья — от пищеварения до иммунной системы.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard 
            icon={<Droplets className="h-10 w-10 text-primary" />}
            title="Группы крови"
            description="I(0), II(A), III(B) и IV(AB) группы крови определяются наличием или отсутствием антигенов A и B на поверхности эритроцитов."
          />
          <InfoCard 
            icon={<HeartPulse className="h-10 w-10 text-secondary" />}
            title="Сердечно-сосудистые риски"
            description="Люди с группой крови A, B и AB имеют более высокий риск сердечно-сосудистых заболеваний по сравнению с группой 0."
          />
          <InfoCard 
            icon={<Dna className="h-10 w-10 text-accent" />}
            title="Генетические факторы"
            description="Ваша группа крови наследуется от родителей и определяется генетическими факторами, влияющими на многие аспекты здоровья."
          />
          <InfoCard 
            icon={<BookOpen className="h-10 w-10 text-muted-foreground" />}
            title="Научные исследования"
            description="Мы собрали данные из авторитетных медицинских источников, чтобы предоставить вам достоверную информацию."
          />
        </div>
      </div>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2 flex flex-col items-center text-center">
        {icon}
        <CardTitle className="mt-4 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default InfoSection;