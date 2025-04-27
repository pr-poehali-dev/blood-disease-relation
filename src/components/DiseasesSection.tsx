import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, Heart, Pill, Stethoscope, Thermometer } from "lucide-react";

interface DiseaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highRiskGroups: string[];
  lowRiskGroups: string[];
  researchLevel: "Высокий" | "Средний" | "Низкий";
}

const DiseaseCard = ({ title, description, icon, highRiskGroups, lowRiskGroups, researchLevel }: DiseaseCardProps) => {
  const getResearchBadgeColor = () => {
    switch (researchLevel) {
      case "Высокий": return "bg-green-100 text-green-800 border-green-200";
      case "Средний": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Низкий": return "bg-red-100 text-red-800 border-red-200";
      default: return "";
    }
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              {icon}
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <Badge variant="outline" className={getResearchBadgeColor()}>
            Уровень исследований: {researchLevel}
          </Badge>
        </div>
        <CardDescription className="text-sm mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-sm font-medium text-destructive mb-1">Повышенный риск:</p>
            <div className="flex flex-wrap gap-1">
              {highRiskGroups.map((group, index) => (
                <Badge key={index} variant="destructive" className="font-normal">
                  {group}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-accent mb-1">Пониженный риск:</p>
            <div className="flex flex-wrap gap-1">
              {lowRiskGroups.map((group, index) => (
                <Badge key={index} variant="outline" className="bg-accent/10 text-accent font-normal">
                  {group}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DiseasesSection = () => {
  return (
    <section className="py-16 bg-background" id="diseases">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Заболевания и группы крови</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Научные исследования выявили корреляции между группами крови и предрасположенностью 
            к различным заболеваниям. Изучите информацию по категориям.
          </p>
        </div>

        <Tabs defaultValue="cardiovascular" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            <TabsTrigger value="cardiovascular">Сердечно-сосудистые</TabsTrigger>
            <TabsTrigger value="digestive">Пищеварительные</TabsTrigger>
            <TabsTrigger value="infectious">Инфекционные</TabsTrigger>
            <TabsTrigger value="other">Другие</TabsTrigger>
          </TabsList>

          <TabsContent value="cardiovascular">
            <div className="grid md:grid-cols-2 gap-6">
              <DiseaseCard
                title="Ишемическая болезнь сердца"
                description="Заболевание, связанное с недостаточным кровоснабжением сердечной мышцы из-за поражения коронарных артерий."
                icon={<Heart className="h-5 w-5" />}
                highRiskGroups={["II(A)", "IV(AB)"]}
                lowRiskGroups={["I(0)"]}
                researchLevel="Высокий"
              />
              <DiseaseCard
                title="Тромбоз"
                description="Образование кровяных сгустков в кровеносных сосудах, что может привести к блокировке кровотока."
                icon={<Activity className="h-5 w-5" />}
                highRiskGroups={["II(A)", "IV(AB)"]}
                lowRiskGroups={["I(0)"]}
                researchLevel="Высокий"
              />
              <DiseaseCard
                title="Артериальная гипертония"
                description="Хроническое повышение артериального давления, приводящее к поражению органов-мишеней."
                icon={<Stethoscope className="h-5 w-5" />}
                highRiskGroups={["II(A)", "III(B)"]}
                lowRiskGroups={["I(0)"]}
                researchLevel="Средний"
              />
            </div>
          </TabsContent>

          <TabsContent value="digestive">
            <div className="grid md:grid-cols-2 gap-6">
              <DiseaseCard
                title="Язвенная болезнь"
                description="Хроническое заболевание, характеризующееся образованием дефектов (язв) в стенке желудка или двенадцатиперстной кишки."
                icon={<Pill className="h-5 w-5" />}
                highRiskGroups={["I(0)"]}
                lowRiskGroups={["II(A)", "IV(AB)"]}
                researchLevel="Высокий"
              />
              <DiseaseCard
                title="Рак желудка"
                description="Злокачественное новообразование, развивающееся из клеток эпителия слизистой оболочки желудка."
                icon={<Thermometer className="h-5 w-5" />}
                highRiskGroups={["II(A)", "IV(AB)"]}
                lowRiskGroups={["I(0)", "III(B)"]}
                researchLevel="Высокий"
              />
              <DiseaseCard
                title="Панкреатит"
                description="Воспаление поджелудочной железы, которое может быть острым или хроническим."
                icon={<Activity className="h-5 w-5" />}
                highRiskGroups={["III(B)"]}
                lowRiskGroups={["I(0)"]}
                researchLevel="Средний"
              />
            </div>
          </TabsContent>

          <TabsContent value="infectious">
            <div className="grid md:grid-cols-2 gap-6">
              <DiseaseCard
                title="Малярия"
                description="Инфекционное заболевание, вызываемое паразитами рода Plasmodium и передающееся через укусы комаров."
                icon={<Thermometer className="h-5 w-5" />}
                highRiskGroups={["I(0)", "IV(AB) Rh-"]}
                lowRiskGroups={["II(A)", "III(B)"]}
                researchLevel="Высокий"
              />
              <DiseaseCard
                title="COVID-19"
                description="Инфекционное заболевание, вызываемое коронавирусом SARS-CoV-2."
                icon={<Pill className="h-5 w-5" />}
                highRiskGroups={["II(A)"]}
                lowRiskGroups={["I(0)"]}
                researchLevel="Средний"
              />
              <DiseaseCard
                title="E. coli инфекции"
                description="Бактериальные инфекции, вызываемые различными штаммами бактерии Escherichia coli."
                icon={<Pill className="h-5 w-5" />}
                highRiskGroups={["III(B)"]}
                lowRiskGroups={["I(0)", "II(A)"]}
                researchLevel="Средний"
              />
            </div>
          </TabsContent>

          <TabsContent value="other">
            <div className="grid md:grid-cols-2 gap-6">
              <DiseaseCard
                title="Когнитивные нарушения"
                description="Снижение памяти, внимания и других когнитивных функций, которое может быть связано с различными заболеваниями."
                icon={<Brain className="h-5 w-5" />}
                highRiskGroups={["III(B)", "IV(AB)"]}
                lowRiskGroups={["I(0)"]}
                researchLevel="Низкий"
              />
              <DiseaseCard
                title="Сахарный диабет 2 типа"
                description="Метаболическое заболевание, характеризующееся высоким уровнем сахара в крови из-за инсулинорезистентности."
                icon={<Activity className="h-5 w-5" />}
                highRiskGroups={["II(A)", "IV(AB)"]}
                lowRiskGroups={["I(0)"]}
                researchLevel="Средний"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Примечание: Данные основаны на научных исследованиях, но индивидуальные факторы риска могут различаться. 
            Эта информация не заменяет консультацию врача.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiseasesSection;