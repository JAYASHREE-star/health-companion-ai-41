import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AIInsightsPanel from "@/components/AIInsightsPanel";
import { Heart, ArrowLeft, Brain, Lightbulb, Target, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const AIInsights = () => {
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
                <h1 className="text-xl font-bold text-foreground">HealthAI Insights</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/monitoring" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Monitoring</Link>
              <Link to="/insights" className="text-sm text-foreground font-medium">AI Insights</Link>
            </nav>
            <Button variant="medical" size="sm">Settings</Button>
          </div>
        </div>
      </header>

      {/* AI Insights Content */}
      <main className="py-8">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">AI Health Insights</h1>
              <p className="text-muted-foreground">Personalized health recommendations and predictive analytics powered by artificial intelligence</p>
            </div>

            {/* AI Insights Overview */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <AIInsightsPanel />
              </div>
              <div className="space-y-6">
                <Card className="bg-gradient-card shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-medical-blue" />
                      AI Analysis Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Health Score</span>
                      <Badge className="bg-health-positive/10 text-health-positive border-0">85/100</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Risk Level</span>
                      <Badge className="bg-health-warning/10 text-health-warning border-0">Low-Medium</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active Insights</span>
                      <Badge className="bg-medical-blue/10 text-medical-blue border-0">12</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Goals Achieved</span>
                      <Badge className="bg-health-positive/10 text-health-positive border-0">8/10</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-medical-teal" />
                      Weekly Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Sleep Quality</span>
                        <span className="text-health-positive">+15%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Activity Level</span>
                        <span className="text-health-positive">+8%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Stress Level</span>
                        <span className="text-health-warning">+5%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Heart Health</span>
                        <span className="text-health-positive">+3%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Advanced AI Capabilities</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our AI analyzes patterns in your health data to provide personalized insights and predictive recommendations
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-6 w-6 text-medical-blue" />
                    </div>
                    <CardTitle className="text-lg">Pattern Recognition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Identifies subtle patterns in your health data that might indicate emerging health trends.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-medical-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-6 w-6 text-medical-teal" />
                    </div>
                    <CardTitle className="text-lg">Smart Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Provides personalized health recommendations based on your unique health profile and goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-health-positive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-health-positive" />
                    </div>
                    <CardTitle className="text-lg">Goal Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Optimizes your health goals and tracks progress with adaptive recommendations for better outcomes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-health-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="h-6 w-6 text-health-warning" />
                    </div>
                    <CardTitle className="text-lg">Early Warning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Detects early signs of potential health issues before they become serious problems.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* AI Performance Metrics */}
            <div className="bg-secondary/30 rounded-2xl p-8">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-2xl font-bold text-foreground">AI Performance Metrics</h2>
                <p className="text-muted-foreground">How our AI is performing in providing health insights</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue mb-2">94%</div>
                  <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-teal mb-2">87%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-health-positive mb-2">150K+</div>
                  <div className="text-sm text-muted-foreground">Insights Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-health-warning mb-2">0.8s</div>
                  <div className="text-sm text-muted-foreground">Analysis Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIInsights;