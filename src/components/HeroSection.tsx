import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-primary/10 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Узнайте, как группа крови влияет на ваше здоровье
            </h1>
            <p className="text-lg text-muted-foreground">
              Новейшие научные данные о взаимосвязи между группой крови и предрасположенностью 
              к различным заболеваниям. Используйте эту информацию для профилактики и заботы о здоровье.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/blood-types">Узнать свою группу</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-medium">
                <Link to="/diseases">Заболевания</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[320px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Медицинская лаборатория"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;