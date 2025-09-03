import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, Target, Clock } from "lucide-react";

interface AIInsight {
  id: string;
  type: "recommendation" | "alert" | "insight" | "goal";
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  timestamp: string;
}

const AIInsightsPanel = () => {
  const insights: AIInsight[] = [
    {
      id: "1",
      type: "recommendation",
      title: "Optimize Sleep Schedule",
      description: "Your heart rate variability suggests better recovery with 7-8 hours of sleep between 10 PM - 6 AM.",
      priority: "high",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      type: "alert",
      title: "Blood Pressure Trend",
      description: "Slight upward trend detected in evening readings. Consider stress management techniques.",
      priority: "medium",
      timestamp: "1 day ago"
    },
    {
      id: "3",
      type: "insight",
      title: "Activity Pattern Analysis",
      description: "Your most productive workout times are between 2-4 PM based on heart rate and performance data.",
      priority: "low",
      timestamp: "3 days ago"
    },
    {
      id: "4",
      type: "goal",
      title: "Hydration Goal Achievement",
      description: "Great job! You've maintained optimal hydration for 7 consecutive days.",
      priority: "medium",
      timestamp: "1 week ago"
    }
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "recommendation":
        return <Lightbulb className="h-4 w-4" />;
      case "alert":
        return <Brain className="h-4 w-4" />;
      case "insight":
        return <Brain className="h-4 w-4" />;
      case "goal":
        return <Target className="h-4 w-4" />;
      default:
        return <Brain className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-health-critical bg-health-critical/10";
      case "medium":
        return "text-health-warning bg-health-warning/10";
      case "low":
        return "text-health-positive bg-health-positive/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <Card className="bg-gradient-card shadow-soft border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-medical-blue" />
          AI Health Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {getInsightIcon(insight.type)}
                <h4 className="font-medium text-sm">{insight.title}</h4>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className={`${getPriorityColor(insight.priority)} border-0 text-xs`}>
                  {insight.priority}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {insight.timestamp}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
            {insight.priority === "high" && (
              <Button size="sm" variant="default" className="h-8">
                Take Action
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AIInsightsPanel;