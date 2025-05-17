import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Leaf, Heart, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[50vh] w-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Team working in clothing design studio"
              className="object-cover"
              priority
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
            <div className="absolute inset-0 flex flex-col justify-center container">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Story</h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Crafting sustainable fashion with passion and purpose since 2010.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container py-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>About Us</span>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-12 md:py-16 lg:py-20 container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Passion to Fashion</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  ATTIRE was founded in 2010 by a group of fashion enthusiasts who shared a vision: to create stylish,
                  high-quality clothing that doesn&apos;t compromise on ethics or sustainability.
                </p>
                <p>
                  What began as a small boutique in downtown has grown into a global brand with a presence in over 20
                  countries. Despite our growth, we&apos;ve stayed true to our founding principles of quality,
                  sustainability, and ethical production.
                </p>
                <p>
                  Our journey hasn&apos;t always been easy, but our commitment to creating fashion that makes both people and
                  the planet feel good has never wavered. Today, we&apos;re proud to be at the forefront of the sustainable
                  fashion movement.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="ATTIRE store interior"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
              <p className="mt-4 text-muted-foreground">
                We believe fashion can be a force for good. Our mission is to create beautiful, timeless pieces that
                empower the wearer and respect our planet.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to reducing our environmental footprint through responsible sourcing, eco-friendly
                  materials, and waste reduction initiatives.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality & Craftsmanship</h3>
                <p className="text-muted-foreground">
                  We believe in creating garments that last. Our focus on quality and craftsmanship means each piece is
                  made to stand the test of time.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ethical Production</h3>
                <p className="text-muted-foreground">
                  We ensure fair wages and safe working conditions throughout our supply chain. We partner only with
                  factories that share our commitment to worker welfare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Sustainable fabric production"
                  className="object-cover"
                  fill
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Commitment to Sustainability</h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    At ATTIRE, sustainability isn&apos;t just a buzzword—it&apos;s at the core of everything we do. We&apos;re
                    constantly innovating to reduce our environmental impact while creating beautiful clothing.
                  </p>
                  <p>
                    By 2026, we aim to use 100% sustainable materials across our entire product range. We&apos;re already at
                    75%, using organic cotton, recycled polyester, and innovative new fabrics made from natural waste
                    products.
                  </p>
                  <p>
                    Our factories are powered by renewable energy, and we&apos;ve implemented water-saving technologies that
                    have reduced our water usage by 40% since 2018.
                  </p>
                </div>
                <Button className="mt-6 rounded-full">Learn More About Our Initiatives</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-12 md:py-16 lg:py-20 container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re always looking for talented individuals who share our passion for sustainable fashion. Check out our
              current openings or send us your resume.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full">View Open Positions</Button>
              <Button variant="outline" className="rounded-full">
                Contact HR
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
