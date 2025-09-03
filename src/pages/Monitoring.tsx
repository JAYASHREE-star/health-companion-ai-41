import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft, Activity, TrendingUp, Shield, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import healthMonitoringImage from "@/assets/health-monitoring.jpg";

const Monitoring = () => {
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
                <h1 className="text-xl font-bold text-foreground">HealthAI Monitoring</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/monitoring" className="text-sm text-foreground font-medium">Monitoring</Link>
              <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Insights</Link>
            </nav>
            <Button variant="medical" size="sm">Settings</Button>
          </div>
        </div>
      </header>

      {/* Monitoring Content */}
      <main className="py-8">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Health Monitoring</h1>
              <p className="text-muted-foreground">Advanced health monitoring with AI-powered analytics and early detection</p>
            </div>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">24/7 Health Surveillance</h2>
                <p className="text-lg text-muted-foreground">
                  Our AI continuously analyzes your health data from multiple sources to provide comprehensive monitoring and early detection of potential health issues.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Activity className="h-6 w-6 text-medical-blue" />
                    <span className="text-foreground">Continuous vital sign monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="h-6 w-6 text-medical-teal" />
                    <span className="text-foreground">AI-powered pattern recognition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-health-positive" />
                    <span className="text-foreground">Predictive health analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-medical-blue" />
                    <span className="text-foreground">Early warning system</span>
                  </div>
                </div>
                <Button variant="medical" size="lg">
                  Start Monitoring
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={healthMonitoringImage} 
                  alt="Advanced health monitoring equipment and analytics" 
                  className="rounded-2xl shadow-medium w-full h-auto"
                />
              </div>
            </div>

            {/* Monitoring Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-medical-blue" />
                  </div>
                  <CardTitle>Cardiac Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous heart rate and rhythm monitoring with advanced arrhythmia detection and cardiac health analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-teal/10 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-medical-teal" />
                  </div>
                  <CardTitle>Sleep Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive sleep tracking with REM analysis, sleep quality scoring, and personalized improvement recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-health-positive/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-health-positive" />
                  </div>
                  <CardTitle>Stress Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Real-time stress level monitoring using HRV analysis and environmental factors with coping strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-medical-blue" />
                  </div>
                  <CardTitle>Cognitive Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mental wellness tracking with mood analysis, cognitive function assessment, and brain health optimization.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-health-warning/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-health-warning" />
                  </div>
                  <CardTitle>Blood Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous glucose monitoring, blood pressure tracking, and metabolic health analysis with trend predictions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-teal/10 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-medical-teal" />
                  </div>
                  <CardTitle>Activity Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive fitness monitoring with exercise recognition, calorie tracking, and performance optimization.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Monitoring Stats */}
            <div className="bg-secondary/30 rounded-2xl p-8">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-2xl font-bold text-foreground">Monitoring Performance</h2>
                <p className="text-muted-foreground">Real-time statistics from our health monitoring platform</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-teal mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-health-positive mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-health-warning mb-2">&lt;1s</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Monitoring;