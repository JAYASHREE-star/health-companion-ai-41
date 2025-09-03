import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Shield, Activity } from "lucide-react";

interface RiskAssessmentCardProps {
  title: string;
  riskLevel: "low" | "moderate" | "high";
  riskScore: number;
  factors: string[];
  recommendations: string[];
}

const RiskAssessmentCard = ({ title, riskLevel, riskScore, factors, recommendations }: RiskAssessmentCardProps) => {
  const getRiskConfig = () => {
    switch (riskLevel) {
      case "low":
        return {
          color: "text-health-positive bg-health-positive/10",
          icon: <Shield className="h-5 w-5" />,
          progressColor: "text-health-positive"
        };
      case "moderate":
        return {
          color: "text-health-warning bg-health-warning/10",
          icon: <Activity className="h-5 w-5" />,
          progressColor: "text-health-warning"
        };
      case "high":
        return {
          color: "text-health-critical bg-health-critical/10",
          icon: <AlertTriangle className="h-5 w-5" />,
          progressColor: "text-health-critical"
        };
    }
  };

  const riskConfig = getRiskConfig();

  return (
    <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span>{title}</span>
          <Badge className={`${riskConfig.color} border-0`}>
            <span className="flex items-center gap-1">
              {riskConfig.icon}
              {riskLevel} risk
            </span>
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Risk Score</span>
            <span className="font-medium">{riskScore}%</span>
          </div>
          <Progress value={riskScore} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Risk Factors</h4>
          <ul className="space-y-1">
            {factors.map((factor, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-medical-blue" />
                {factor}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">AI Recommendations</h4>
          <ul className="space-y-1">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-medical-teal" />
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessmentCard;