import Layout from "@/components/layout/Layout";
import { Target, Users, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To help people make informed purchasing decisions by providing honest, comprehensive product reviews and recommendations."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of product experts and researchers test and evaluate products to ensure you get reliable recommendations."
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "We maintain strict standards for product selection, focusing on quality, value, and customer satisfaction."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're committed to helping you find products that truly meet your needs."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About ZYN 
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in finding the best products online.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ZYN was created with a clear mission: to connect people with products that actually make a difference. In a world full of endless choices and mixed reviews, we serve as your trusted guide to smarter, more confident shopping decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team researches, compares, and analyzes hundreds of products across multiple categories. We don’t just rely on what manufacturers say — we test and evaluate products to bring you honest, real-world insights.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">How We Work</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every product featured on ZYN goes through a careful selection process:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
                <li>Thorough research of product features and benefits</li>
                <li>Hands-on testing whenever possible</li>
                <li>Review analysis from verified users</li>
                <li>Price comparison across trusted retailers</li>
                <li>Evaluation of long-term quality and value</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-6">Transparency and Trust</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ZYN participates in affiliate programs with selected brands and retailers. This means that when you make a purchase through our links, we may earn a small commission — at no extra cost to you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These partnerships help us maintain our platform and continue offering valuable recommendations. But our commitment remains the same: we only promote products that truly meet our quality standards.
                <p>At ZYN, your trust means everything to us.</p>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;