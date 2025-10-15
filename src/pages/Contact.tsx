import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_x0c8h3q", // ✅ Service ID
        "template_qa98icc", // ✅ Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: new Date().toLocaleString(),
        },
        "O0lohg98BO2vYWUfD" // ✅ Public Key
      );

      if (result.status === 200 || result.text === "OK") {
        toast({
          title: "Mensagem enviada!",
          description:
            "Obrigado pela sua mensagem. Entraremos em contacto em breve.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Falha no envio");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast({
        title: "Erro",
        description: "Falha ao enviar a mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center space-y-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a question or suggestion? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get in touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We are here to help! Whether for questions, partnerships or 
                  product suggestions, send us a message.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                     Send us an email and we will respond within 24 hours.
                    </p>
                    <a
                      href="mailto:lazivaniomulazaeren@gmail.com"
                      className="text-primary hover:underline"
                    >
                      lazivaniomulazaeren@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      General Questions
                    </h3>
                    <p className="text-muted-foreground">
                      Questions about products, partnerships or review process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">e-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="type your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      send message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
