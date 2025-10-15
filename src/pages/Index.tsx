// src/pages/Index.tsx
import { Link } from "react-router-dom";
import { Search, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import heroImage from "@/assets/hero-image.jpg";

// 👉 Importando os produtos
import products from "@/data/Products";

const Index = () => {
  // Vamos exibir só alguns produtos em destaque na home
  const featuredProducts = products.slice(0, 3);

  const features = [
    {
      icon: Search,
      title: "Expert Research",
      description:
        "We thoroughly research and test products to bring you only the best recommendations.",
    },
    {
      icon: Shield,
      title: "Trusted Reviews",
      description:
        "Honest, unbiased reviews from real users and expert testers you can trust.",
    },
    {
      icon: Zap,
      title: "Quick Decisions",
      description:
        "Save time with our curated selections and detailed comparison guides.",
    },
    {
      icon: TrendingUp,
      title: "Best Deals",
      description:
        "Access exclusive discounts and the best prices on top-rated products.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Find the <span className="text-primary">Best Products</span>{" "}
                  Online
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Discover top-rated products, read expert reviews, and make
                  informed decisions. We help you find exactly what you're
                  looking for at the best prices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/products">Browse Products</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Best products online"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ZYN?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to helping you make the best purchasing decisions
              with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked products that offer the best value, quality, and
              performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Find Your Perfect Product?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers who trust ProductHub for
              their online shopping decisions.
            </p>
            <Button variant="success" size="xl" asChild>
              <Link to="/products">Start Shopping Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
