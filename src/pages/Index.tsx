import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HealthMetricCard from "@/components/HealthMetricCard";
import RiskAssessmentCard from "@/components/RiskAssessmentCard";
import AIInsightsPanel from "@/components/AIInsightsPanel";
import { Heart, Activity, Shield, Brain, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/healthcare-hero.jpg";
import healthMonitoringImage from "@/assets/health-monitoring.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-foreground">HealthAI</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/monitoring" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Monitoring</Link>
              <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Insights</Link>
            </nav>
            <Link to="/dashboard">
              <Button variant="medical" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/20 to-medical-teal/20" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Smart Healthcare
                  <span className="block text-white/90">Companion</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                  AI-powered personalized health monitoring with early risk detection. Take control of your health with intelligent insights and proactive care.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button variant="secondary" size="lg" className="bg-white text-medical-blue hover:bg-white/90 w-full sm:w-auto">
                    Start Health Assessment
                  </Button>
                </Link>
                <Link to="/monitoring">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span className="text-sm">50K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  <span className="text-sm">AI-Powered</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Healthcare monitoring dashboard with AI analytics" 
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Health Dashboard Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Health Dashboard</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-time monitoring of your vital health metrics with AI-powered insights for better health decisions.
              </p>
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

            {/* Risk Assessment and AI Insights */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Risk Assessment</h3>
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
      </section>

      {/* Health Monitoring Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Advanced Health Monitoring</h2>
              <p className="text-lg text-muted-foreground">
                Our AI continuously analyzes your health data from multiple sources to provide comprehensive monitoring and early detection of potential health issues.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-medical-blue" />
                  <span className="text-foreground">24/7 continuous monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-medical-teal" />
                  <span className="text-foreground">AI-powered health insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-health-positive" />
                  <span className="text-foreground">Predictive health analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-medical-blue" />
                  <span className="text-foreground">Early risk detection</span>
                </div>
              </div>
              <Link to="/monitoring">
                <Button variant="medical" size="lg">
                  Start Monitoring
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={healthMonitoringImage} 
                alt="Advanced health monitoring equipment and analytics" 
                className="rounded-2xl shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comprehensive Health Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for proactive health management in one intelligent platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-medical-blue" />
                </div>
                <CardTitle>Vital Signs Monitoring</CardTitle>
                <CardDescription>
                  Real-time tracking of heart rate, blood pressure, and other crucial health metrics.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-medical-teal" />
                </div>
                <CardTitle>AI Health Insights</CardTitle>
                <CardDescription>
                  Personalized recommendations based on your unique health patterns and data.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-health-positive/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-health-positive" />
                </div>
                <CardTitle>Risk Prediction</CardTitle>
                <CardDescription>
                  Early detection and prevention strategies for potential health risks.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">HealthAI</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 HealthAI. Your trusted AI-powered healthcare companion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;