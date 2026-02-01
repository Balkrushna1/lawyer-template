import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Navigation } from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  ShieldAlert, 
  Car, 
  HardHat, 
  Stethoscope, 
  Footprints, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Scale
} from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function Home() {
  const mutation = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="min-h-screen font-sans bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* court room professional */}
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
            alt="Law Office Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center md:text-left md:flex md:items-center md:gap-12">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-bold text-yellow-500 uppercase tracking-wider">No Win, No Fee Guarantee</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Unrelenting Justice <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                For Injury Victims
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              With over 20 years of courtroom experience, we fight powerful insurance companies to secure the maximum compensation you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-xl font-bold shadow-lg shadow-accent/20 transition-all hover:-translate-y-1"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5" />
                <span>Free Case Evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5" />
                <span>Millions Recovered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...fadeIn}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 transform rotate-3" />
              {/* professional lawyer portrait */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="Senior Attorney" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden lg:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Scale className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">98% Success Rate</p>
                    <p className="text-xs text-slate-500">In Personal Injury Cases</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn}>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">About The Firm</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Dedicated to Fighting for <br/>
                <span className="text-primary">Your Rights</span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                We understand that an injury can be a life-altering event. The physical pain, emotional trauma, and financial burden can be overwhelming. That is where we step in.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                For over two decades, our firm has stood as a bulwark against negligence. We treat every client like family, ensuring you get the personalized attention and aggressive representation needed to win against well-funded adversaries.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-1">20+</h4>
                  <p className="text-slate-500">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-1">$50M+</h4>
                  <p className="text-slate-500">Recovered for Clients</p>
                </div>
              </div>

              <Button variant="link" className="p-0 h-auto text-primary text-lg font-semibold group">
                Read Our Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Practice Areas</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">How We Can Help You</h3>
            <p className="text-slate-600">
              We specialize in a wide range of personal injury cases. If you've been hurt due to someone else's negligence, we have the expertise to help.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                icon: Car, 
                title: "Car Accidents", 
                desc: "Expert legal representation for auto collisions involving negligence or recklessness." 
              },
              { 
                icon: HardHat, 
                title: "Workplace Injury", 
                desc: "Helping workers secure compensation for on-the-job accidents and safety violations." 
              },
              { 
                icon: Stethoscope, 
                title: "Medical Negligence", 
                desc: "Holding healthcare providers accountable for errors, misdiagnoses, and malpractice." 
              },
              { 
                icon: Footprints, 
                title: "Slip & Fall", 
                desc: "Premises liability cases for injuries caused by unsafe property conditions." 
              },
            ].map((service, i) => (
              <motion.div variants={fadeIn} key={i}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-primary text-white overflow-hidden">
        <div className="container px-4 mx-auto relative">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Client Success Stories</h2>
            <h3 className="text-4xl font-serif font-bold mb-4">Voices of Victory</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                quote: "I was overwhelmed after my accident. The team handled everything with such professionalism and compassion. I couldn't be happier with the settlement.",
                author: "Sarah Jenkins",
                case: "Car Accident Case"
              },
              {
                quote: "They didn't just act as my lawyers; they were my advocates. They fought for every penny and kept me informed throughout the entire process.",
                author: "Michael Rodriguez",
                case: "Workplace Injury"
              },
              {
                quote: "Honest, transparent, and fierce in court. I highly recommend them to anyone who needs serious legal representation.",
                author: "David Chen",
                case: "Medical Malpractice"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="text-accent text-6xl font-serif leading-none mb-4">"</div>
                <p className="text-blue-50 leading-relaxed mb-6 italic text-lg">
                  {t.quote}
                </p>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.author}</h4>
                  <p className="text-blue-200 text-sm">{t.case}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Common Questions</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900">What You Need to Know</h3>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "How much will it cost to hire you?",
                a: "We work on a contingency fee basis. This means you pay absolutely nothing upfront. We only get paid if we win your case. Our fee is a percentage of the settlement or verdict we recover for you."
              },
              {
                q: "Do I have a valid case?",
                a: "Every situation is unique. We offer a 100% free, confidential consultation to review the details of your incident and determine if you have grounds for a claim. Contact us today to find out."
              },
              {
                q: "How long will my case take?",
                a: "The timeline varies significantly depending on the complexity of the case, the extent of your injuries, and the willingness of the insurance company to settle fairly. Some cases settle in months; others may take years if they go to trial."
              },
              {
                q: "What should I bring to the consultation?",
                a: "Bring any documents related to your injury: police reports, medical records, insurance correspondence, photos of the accident scene, and witness contact information. The more information you have, the better we can evaluate your case."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6 data-[state=open]:bg-slate-50 transition-colors">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Get in Touch</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Free Case Evaluation
              </h3>
              <p className="text-slate-600 text-lg mb-10">
                Don't wait. Strict time limits apply to personal injury claims. 
                Fill out the form below or call us immediately for a free consultation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600 text-lg hover:text-primary transition-colors cursor-pointer">
                      (555) 123-4567
                    </p>
                    <p className="text-sm text-slate-400">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600 text-lg hover:text-primary transition-colors cursor-pointer">
                      help@justicepartners.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Office</h4>
                    <p className="text-slate-600">
                      123 Legal Avenue, Suite 400<br/>
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 bg-slate-50 border-slate-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="h-12 bg-slate-50 border-slate-200" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" className="h-12 bg-slate-50 border-slate-200" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your case</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="I was involved in a car accident on..." 
                            className="min-h-[120px] bg-slate-50 border-slate-200 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={mutation.isPending}
                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                  >
                    {mutation.isPending ? "Submitting..." : "Get Free Consultation"}
                  </Button>
                  <p className="text-xs text-center text-slate-400 mt-4">
                    By submitting this form, you agree to our privacy policy. Your information is 100% confidential.
                  </p>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Scale className="h-6 w-6 text-white" />
                <span className="font-serif font-bold text-xl text-white">JUSTICE</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Dedicated legal partners fighting for the rights of the injured. We are committed to securing the justice and compensation you deserve.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Practice Areas</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 Justice Legal Partners. All rights reserved.</p>
            <p className="text-slate-500 mt-2 md:mt-0">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
