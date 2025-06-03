import { ArrowLeft, CheckCircle, Clock, FileText, Search, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BlogWritingService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">EliteScribe</span>
          </Link>
          <Button asChild>
            <Link href="/#contact">Get Quote</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Blog Writing & SEO Content</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog Writing That Ranks, Engages, and Converts
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Get SEO-optimized blog posts that drive organic traffic, establish thought leadership, and convert readers
              into customers. Every post is crafted to perform in 2025's competitive digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/#contact">Start Your Blog Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#portfolio">View Blog Samples</Link>
              </Button>
            </div>
          </div>

          {/* What's Included */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">What's Included in Every Blog Post</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Comprehensive Keyword Research</h4>
                      <p className="text-gray-600 text-sm">
                        Target high-value keywords with optimal search volume and competition balance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">SEO-Optimized Structure</h4>
                      <p className="text-gray-600 text-sm">
                        Proper heading hierarchy, meta descriptions, and internal linking strategy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Engaging, Original Content</h4>
                      <p className="text-gray-600 text-sm">
                        Well-researched, plagiarism-free content that provides real value
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Brand Voice Alignment</h4>
                      <p className="text-gray-600 text-sm">Content that matches your brand's tone and messaging</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Call-to-Action Optimization</h4>
                      <p className="text-gray-600 text-sm">Strategic CTAs that guide readers toward conversion</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Image Recommendations</h4>
                      <p className="text-gray-600 text-sm">Suggestions for visuals that enhance engagement and SEO</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Performance Tracking Setup</h4>
                      <p className="text-gray-600 text-sm">Analytics recommendations to measure success</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Unlimited Revisions</h4>
                      <p className="text-gray-600 text-sm">We'll refine until you're completely satisfied</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Blog Writing Packages</CardTitle>
              <CardDescription>Choose the package that fits your content needs and budget</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">
                    $0.10<span className="text-sm text-gray-500">/word</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• 500-800 word posts</li>
                    <li>• Basic SEO optimization</li>
                    <li>• 1 revision round</li>
                    <li>• 5-7 day turnaround</li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </div>
                <div className="border-2 border-emerald-500 rounded-lg p-6 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500">
                    Most Popular
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">
                    $0.12<span className="text-sm text-gray-500">/word</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• 800-1500 word posts</li>
                    <li>• Advanced SEO optimization</li>
                    <li>• Unlimited revisions</li>
                    <li>• 3-5 day turnaround</li>
                    <li>• Image recommendations</li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">
                    $0.14<span className="text-sm text-gray-500">/word</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• 1500+ word posts</li>
                    <li>• Comprehensive SEO strategy</li>
                    <li>• Unlimited revisions</li>
                    <li>• 2-3 day turnaround</li>
                    <li>• Performance tracking</li>
                    <li>• Content series planning</li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Blog Writing Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-emerald-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Topic Research & Planning</h4>
                    <p className="text-gray-600">
                      We research your industry, analyze competitor content, and identify high-opportunity topics that
                      align with your business goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-emerald-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Keyword Optimization</h4>
                    <p className="text-gray-600">
                      Comprehensive keyword research to identify primary and secondary keywords that will drive
                      qualified traffic to your blog.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-emerald-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Creation</h4>
                    <p className="text-gray-600">
                      Writing engaging, informative content that provides real value to your readers while incorporating
                      SEO best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-emerald-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Review & Optimization</h4>
                    <p className="text-gray-600">
                      Thorough editing, fact-checking, and optimization for readability, SEO, and conversion potential.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardHeader>
              <CardTitle className="text-2xl">Typical Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Search className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-emerald-600">185%</div>
                  <div className="text-gray-600">Average increase in organic traffic</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-600">67%</div>
                  <div className="text-gray-600">Improvement in search rankings</div>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-600">4.2x</div>
                  <div className="text-gray-600">Increase in average time on page</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Boost Your Blog's Performance?</h3>
              <p className="text-emerald-100 mb-6">
                Get blog content that drives traffic, engages readers, and converts visitors into customers.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#contact">Start Your Blog Project</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
