"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, Brain, BarChart3, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SplitText from "@/components/SplitText";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-green-900">Trakr.</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-green-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <SplitText
            text="Finance without complexity"
            className="text-5xl md:text-6xl font-bold text-balance mb-3"
            delay={150}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Take control of your financial future with AI-powered insights,
            smart tracking, and personalized investment guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-green-700 active:bg-green-950 hover:bg-green-950"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4`}
          >
            Everything you need to manage your finances
          </h2>
          <p className={`text-xl text-muted-foreground max-w-5xl mx-auto`}>
            From tracking expenses to investment planning, Trakr provides
            comprehensive tools for your financial success!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12  bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Automatically categorize and track your income and expenses with
                intelligent insights.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12  bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Investment Tracking
              </h3>
              <p className="text-muted-foreground text-sm">
                Monitor your portfolio performance with real-time stock data and
                analytics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Advisor</h3>
              <p className="text-muted-foreground text-sm">
                Get personalized financial advice powered by AI based on your
                spending patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground text-sm">
                Your financial data is encrypted and protected
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
