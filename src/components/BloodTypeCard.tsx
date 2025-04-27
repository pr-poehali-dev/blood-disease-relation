import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BloodTypeCardProps {
  group: string;
  rhesus: string;
  description: string;
  prevalence: string;
  riskDiseases: string[];
  protectiveDiseases: string[];
}

const BloodTypeCard = ({
  group,
  rhesus,
  description,
  prevalence,
  riskDiseases,
  protectiveDiseases
}: BloodTypeCardProps) => {
  return (
    <Card className="w-full h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">{group}{rhesus}</CardTitle>
          <Badge variant="outline" className="bg-muted text-muted-foreground">
            {prevalence}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-destructive mb-1">Повышенный риск:</h4>
            <div className="flex flex-wrap gap-1">
              {riskDiseases.map((disease, index) => (
                <Badge key={index} variant="destructive" className="font-normal">
                  {disease}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-accent mb-1">Пониженный риск:</h4>
            <div className="flex flex-wrap gap-1">
              {protectiveDiseases.map((disease, index) => (
                <Badge key={index} variant="outline" className="bg-accent/10 text-accent font-normal">
                  {disease}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <p className="text-sm text-muted-foreground">
          Данные основаны на научных исследованиях, но не являются диагностическими
        </p>
      </CardFooter>
    </Card>
  );
};

export default BloodTypeCard;