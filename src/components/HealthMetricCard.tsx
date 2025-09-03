import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface HealthMetricCardProps {
  title: string;
  value: string;
  unit: string;
  trend: "up" | "down" | "stable";
  status: "normal" | "warning" | "critical";
  description: string;
}

const HealthMetricCard = ({ title, value, unit, trend, status, description }: HealthMetricCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4" />;
      case "down":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "normal":
        return "text-health-positive bg-health-positive/10";
      case "warning":
        return "text-health-warning bg-health-warning/10";
      case "critical":
        return "text-health-critical bg-health-critical/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <Badge variant="secondary" className={`${getStatusColor()} border-0`}>
            <span className="flex items-center gap-1">
              {getTrendIcon()}
              {status}
            </span>
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">{value}</span>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthMetricCard;