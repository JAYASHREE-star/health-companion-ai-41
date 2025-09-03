import HealthMetricCard from "@/components/HealthMetricCard";
import RiskAssessmentCard from "@/components/RiskAssessmentCard";
import AIInsightsPanel from "@/components/AIInsightsPanel";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-foreground">HealthAI Dashboard</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm text-foreground font-medium">Dashboard</Link>
              <Link to="/monitoring" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Monitoring</Link>
              <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Insights</Link>
            </nav>
            <Button variant="medical" size="sm">Settings</Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="py-8">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Health Dashboard</h1>
              <p className="text-muted-foreground">Your comprehensive health overview and vital metrics</p>
            </div>

            {/* Health Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <HealthMetricCard
                title="Heart Rate"
                value="72"
                unit="bpm"
                trend="stable"
                status="normal"
                description="Resting heart rate within healthy range"
              />
              <HealthMetricCard
                title="Blood Pressure"
                value="118/76"
                unit="mmHg"
                trend="down"
                status="normal"
                description="Optimal blood pressure levels"
              />
              <HealthMetricCard
                title="Sleep Quality"
                value="8.2"
                unit="/10"
                trend="up"
                status="normal"
                description="Excellent sleep quality this week"
              />
              <HealthMetricCard
                title="Stress Level"
                value="3.4"
                unit="/10"
                trend="up"
                status="warning"
                description="Slightly elevated stress detected"
              />
            </div>

            {/* Additional Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <HealthMetricCard
                title="Daily Steps"
                value="8,247"
                unit="steps"
                trend="up"
                status="normal"
                description="Above daily goal of 8,000 steps"
              />
              <HealthMetricCard
                title="Water Intake"
                value="2.1"
                unit="liters"
                trend="stable"
                status="normal"
                description="Meeting hydration goals"
              />
              <HealthMetricCard
                title="BMI"
                value="22.4"
                unit="kg/m²"
                trend="stable"
                status="normal"
                description="Normal weight range"
              />
            </div>

            {/* Risk Assessment and AI Insights */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Risk Assessment</h2>
                <RiskAssessmentCard
                  title="Cardiovascular Health"
                  riskLevel="low"
                  riskScore={15}
                  factors={["Regular exercise routine", "Healthy diet", "Normal BMI"]}
                  recommendations={["Continue current lifestyle", "Add omega-3 supplements", "Monitor cholesterol annually"]}
                />
                <RiskAssessmentCard
                  title="Diabetes Risk"
                  riskLevel="moderate"
                  riskScore={35}
                  factors={["Family history", "Sedentary periods", "Irregular meal times"]}
                  recommendations={["Increase physical activity", "Regular blood glucose monitoring", "Consult nutritionist"]}
                />
              </div>
              <AIInsightsPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;