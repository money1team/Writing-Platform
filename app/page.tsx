import {
  CheckCircle,
  DollarSign,
  FileText,
  Globe,
  Mail,
  Star,
  Users,
  Zap,
  BarChart,
  Award,
  ThumbsUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function WritingPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">EliteScribe</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Portfolio
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get Quote
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-3 py-1">
            Premium Content Creation Since 2020
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Elevate Your Brand With Elite Content</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get industry-leading content that converts. I deliver premium writing across various industries with rates
            between 10-14 cents per word. Over 200+ satisfied clients and counting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3" asChild>
              <Link href="#contact">
                <DollarSign className="mr-2 h-5 w-5" />
                Start Your Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
              <Link href="#portfolio">
                <FileText className="mr-2 h-5 w-5" />
                View Portfolio
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-emerald-600">200+</p>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-600">1.2M+</p>
              <p className="text-gray-600">Words Written</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-600">98%</p>
              <p className="text-gray-600">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Why Choose EliteScribe</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Writing Services for Discerning Brands
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No other writing service offers as many benefits for your business growth in 2025's competitive landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Premium Rates, Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Competitive rates between 10-14 cents per word ensure you get exceptional value for professional,
                  conversion-focused content that delivers measurable ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>No Hidden Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transparent pricing with no membership fees or hidden costs. You pay only for the quality content you
                  receive, with clear contracts and deliverables.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Fast & Secure Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quick, convenient, and secure payments through PayPal, crypto, or your preferred method. Bi-monthly
                  payment cycles ensure reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Consistent Quality Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tired of inconsistent freelancers? Get a steady flow of high-quality, engaging content tailored to
                  your needs with AI-assisted quality control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Streamlined Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Simple, responsive interface makes project management a breeze. Easy communication, feedback, and
                  revision handling with our 2025 project management system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Exclusive Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work with a carefully selected professional writer. Less competition, more opportunities, and
                  dedicated attention to your projects with priority service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Writing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional content creation across multiple industries and formats, optimized for 2025's digital
              landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Blog Posts & Articles",
                description: "SEO-optimized content that ranks and converts",
                icon: <FileText className="h-8 w-8 text-emerald-500 mx-auto mb-3" />,
                href: "/services/blog-writing",
              },
              {
                title: "Website Copy",
                description: "Compelling copy that drives action",
                icon: <Globe className="h-8 w-8 text-emerald-500 mx-auto mb-3" />,
                href: "/services/website-copy",
              },
              {
                title: "Email Marketing",
                description: "High-converting email sequences",
                icon: <Mail className="h-8 w-8 text-emerald-500 mx-auto mb-3" />,
                href: "/services/email-marketing",
              },
              {
                title: "Social Media Content",
                description: "Engaging posts that build community",
                icon: <Users className="h-8 w-8 text-emerald-500 mx-auto mb-3" />,
                href: "/services/social-media",
              },
              {
                title: "Product Descriptions",
                description: "Persuasive copy that sells",
                icon: <DollarSign className="h-8 w-8 text-emerald-500 mx-auto mb-3" />,
                href: "/services/product-descriptions",
              },
              {
                title: "Technical Writing",
                description: "Complex concepts made simple",
                icon: <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-3" />,
                href: "/services/technical-writing",
              },
              {
                title: "Press Releases",
                description: "Newsworthy content that gets attention",
                icon: <Star className="h-8 w-8 text-emerald-500 mx-auto mb-3" />,
                href: "/services/press-releases",
              },
              {
                title: "Case Studies",
                description: "Compelling stories that showcase results",
                icon: <BarChart className="h-8 w-8 text-emerald-500 mx-auto mb-3" />,
                href: "/services/case-studies",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    {service.icon}
                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through some of my most successful writing projects and case studies
            </p>
          </div>

          <Tabs defaultValue="case-studies" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="blog-posts">Blog Posts</TabsTrigger>
              <TabsTrigger value="website-copy">Website Copy</TabsTrigger>
              <TabsTrigger value="email">Email Campaigns</TabsTrigger>
            </TabsList>

            <TabsContent value="case-studies" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "TechVision SaaS Platform",
                    description: "Comprehensive case study that helped increase conversions by 43%",
                    metrics: "43% conversion increase",
                    industry: "SaaS",
                    href: "/portfolio/case-studies/techvision-saas",
                  },
                  {
                    title: "GreenLife Eco Products",
                    description: "Product launch case study that generated $1.2M in first-month sales",
                    metrics: "$1.2M in sales",
                    industry: "Eco-Retail",
                    href: "/portfolio/case-studies/greenlife-eco",
                  },
                  {
                    title: "FinEdge Investment Platform",
                    description: "Technical case study explaining complex financial algorithms to investors",
                    metrics: "67% increase in investor sign-ups",
                    industry: "FinTech",
                    href: "/portfolio/case-studies/finedge-investment",
                  },
                  {
                    title: "MediHealth Patient Portal",
                    description: "Healthcare technology implementation case study for medical professionals",
                    metrics: "89% user satisfaction rating",
                    industry: "Healthcare",
                    href: "/portfolio/case-studies/medihealth-portal",
                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                      <FileText className="h-16 w-16 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{project.industry}</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800">{project.metrics}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.href}>View Case Study</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="blog-posts" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "10 AI Trends Reshaping Content Marketing in 2025",
                    description: "In-depth analysis of emerging AI technologies in content marketing",
                    metrics: "250K+ views",
                    industry: "Marketing",
                    href: "/portfolio/blog-posts/ai-trends-2025",
                  },
                  {
                    title: "The Ultimate Guide to Sustainable Business Practices",
                    description: "Comprehensive guide to implementing eco-friendly business strategies",
                    metrics: "187 backlinks generated",
                    industry: "Sustainability",
                    href: "/portfolio/blog-posts/sustainable-business-guide",
                  },
                  {
                    title: "Blockchain for Beginners: A Non-Technical Guide",
                    description: "Simplified explanation of blockchain technology for non-technical audiences",
                    metrics: "12 min avg. read time",
                    industry: "Technology",
                    href: "/portfolio/blog-posts/blockchain-beginners-guide",
                  },
                  {
                    title: "Remote Work in 2025: New Tools and Best Practices",
                    description: "Analysis of remote work trends and productivity tools",
                    metrics: "43K social shares",
                    industry: "Workplace",
                    href: "/portfolio/blog-posts/remote-work-2025",
                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center">
                      <FileText className="h-16 w-16 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{project.industry}</Badge>
                        <Badge className="bg-teal-100 text-teal-800">{project.metrics}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.href}>Read Article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="website-copy" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "NovaTech Solutions Homepage",
                    description: "Complete website copy rewrite that improved conversion rates",
                    metrics: "156% conversion increase",
                    industry: "Technology",
                    href: "/portfolio/website-copy/novatech-homepage",
                  },
                  {
                    title: "Wellness Collective Product Pages",
                    description: "Product descriptions for premium wellness brand",
                    metrics: "92% cart completion",
                    industry: "Health & Wellness",
                    href: "/portfolio/website-copy/wellness-collective",
                  },
                  {
                    title: "UrbanLiving Real Estate Platform",
                    description: "Property listing descriptions and landing page copy",
                    metrics: "3.2x inquiry increase",
                    industry: "Real Estate",
                    href: "/portfolio/website-copy/urbanliving-platform",
                  },
                  {
                    title: "GlobalEdu Online Learning",
                    description: "Course descriptions and educational content",
                    metrics: "78% enrollment rate",
                    industry: "Education",
                    href: "/portfolio/website-copy/globaledu-learning",
                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Globe className="h-16 w-16 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{project.industry}</Badge>
                        <Badge className="bg-blue-100 text-blue-800">{project.metrics}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.href}>View Project</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="email" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "FitLife Membership Campaign",
                    description: "6-email sequence for fitness membership renewals",
                    metrics: "72% open rate",
                    industry: "Fitness",
                    href: "/portfolio/email-campaigns/fitlife-membership",
                  },
                  {
                    title: "TechGadget Product Launch",
                    description: "Pre-launch and launch email sequence for new tech product",
                    metrics: "$430K in revenue",
                    industry: "Consumer Tech",
                    href: "/portfolio/email-campaigns/techgadget-launch",
                  },
                  {
                    title: "CreativeMinds Workshop Series",
                    description: "Email campaign promoting online creative workshops",
                    metrics: "41% click-through rate",
                    industry: "Education",
                    href: "/portfolio/email-campaigns/creativeminds-workshops",
                  },
                  {
                    title: "EcoTravel Newsletter Revamp",
                    description: "Complete overhaul of travel company's newsletter strategy",
                    metrics: "3.8x subscriber growth",
                    industry: "Travel",
                    href: "/portfolio/email-campaigns/ecotravel-newsletter",
                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      <Mail className="h-16 w-16 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{project.industry}</Badge>
                        <Badge className="bg-purple-100 text-purple-800">{project.metrics}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.href}>View Campaign</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it - here's what clients have to say about working with EliteScribe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                position: "Marketing Director, TechVision",
                quote:
                  "The content produced by EliteScribe has consistently outperformed our in-house team's work. Our blog traffic increased by 215% in just 3 months after implementing their SEO content strategy.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Michael Chen",
                position: "CEO, GreenLife Products",
                quote:
                  "Working with EliteScribe has been transformative for our brand messaging. The product descriptions they created helped us achieve our best product launch to date, with $1.2M in first-month sales.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Jessica Williams",
                position: "Content Manager, FinEdge",
                quote:
                  "I've worked with many writers over my 15-year career, and EliteScribe stands head and shoulders above the rest. They consistently deliver complex financial content that's both accurate and engaging.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "David Rodriguez",
                position: "Founder, MediHealth",
                quote:
                  "EliteScribe has an uncanny ability to translate technical medical concepts into patient-friendly language. Our portal's user satisfaction ratings jumped from 62% to 89% after implementing their content.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Emma Thompson",
                position: "Digital Director, NovaTech",
                quote:
                  "The website copy EliteScribe created for us was nothing short of remarkable. Conversions increased by 156% within weeks of the new copy going live. Worth every penny!",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Robert Kim",
                position: "Email Marketing Lead, TechGadget",
                quote:
                  "Our product launch email sequence generated $430K in revenue, a 340% increase over our previous best campaign. EliteScribe's understanding of our audience was spot-on.",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 pt-10 relative">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <ThumbsUp className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple 3-step process to get your content created</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discuss Your Project</h3>
              <p className="text-gray-600">
                Share your requirements, target audience, and goals. I'll provide a detailed quote and timeline for your
                project with a comprehensive content strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <p className="text-gray-600">
                I create your content with attention to detail, SEO optimization, and your brand voice. Regular updates
                keep you informed with our 2025 real-time collaboration tools.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deliver & Measure Results</h3>
              <p className="text-gray-600">
                Receive your polished content with revisions if needed. We'll track performance metrics to ensure your
                content achieves its goals and delivers ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Recognition</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Industry recognition for excellence in content creation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Content Creator of the Year",
                organization: "Digital Marketing Association",
                year: "2024",
              },
              {
                title: "Best SaaS Content Strategy",
                organization: "Tech Content Awards",
                year: "2024",
              },
              {
                title: "Excellence in Email Marketing",
                organization: "Email Innovators",
                year: "2023",
              },
              {
                title: "Top 50 Freelance Writers",
                organization: "Content Creators Guild",
                year: "2023",
              },
            ].map((award, index) => (
              <div key={index} className="text-center">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{award.title}</h3>
                <p className="text-gray-500 text-sm">{award.organization}</p>
                <p className="text-gray-400 text-xs">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Get Started</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Elevate Your Content?</h2>
              <p className="text-gray-600">
                Get a free quote for your writing project. No obligations, just professional advice.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Project Inquiry</CardTitle>
                <CardDescription>Tell me about your project and I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div>
                  <Label htmlFor="project">Project Details</Label>
                  <Textarea
                    id="project"
                    placeholder="Describe your project, word count, timeline, and any specific requirements..."
                    className="min-h-[120px]"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <Label htmlFor="consent" className="text-sm text-gray-500">
                    I agree to receive communications from EliteScribe. You can unsubscribe at any time. See our Privacy
                    Policy for more information.
                  </Label>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Project Inquiry
                </Button>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t px-6 py-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Average response time: 4 hours</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <FileText className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">EliteScribe</span>
              </Link>
              <p className="text-gray-400">
                Premium content creation services for businesses that demand excellence. Elevating brands through the
                power of words since 2020.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/blog-writing" className="hover:text-emerald-400 transition-colors">
                    Blog Writing & SEO Content
                  </Link>
                </li>
                <li>
                  <Link href="/services/website-copy" className="hover:text-emerald-400 transition-colors">
                    Website Copy & Landing Pages
                  </Link>
                </li>
                <li>
                  <Link href="/services/email-marketing" className="hover:text-emerald-400 transition-colors">
                    Email Marketing Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="/services/technical-writing" className="hover:text-emerald-400 transition-colors">
                    Technical & Industry Content
                  </Link>
                </li>
                <li>
                  <Link href="/services/case-studies" className="hover:text-emerald-400 transition-colors">
                    Case Studies & White Papers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Ready to discuss your project?
                <br />
                Get in touch for a free consultation.
              </p>
              <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="#contact">Start Project</Link>
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EliteScribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
