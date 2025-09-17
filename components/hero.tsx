"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/Profile.jpeg"
                alt="El Mahdi ARFAL - Cloud Networking Engineer"
                fill
                className="rounded-full object-cover border-4 border-primary/20"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Available for Internship
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            El Mahdi{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ARFAL</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
            Cloud Networking Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering Networks with Cloud Solutions. Specializing in{" "}
            <span className="text-primary font-semibold">5G Networks</span>,{" "}
            <span className="text-primary font-semibold">AWS Cloud Infrastructure</span>, and{" "}
            <span className="text-primary font-semibold">DevOps</span> technologies.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-4 w-4" />
            <span>Rabat, Morocco</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gap-2 px-8 py-3 text-lg" onClick={scrollToContact}>
              <Mail className="h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-8 py-3 text-lg bg-transparent"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://linkedin.com/in/elmahdi-arfal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/elmahdi-arfal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:arfalelmahdi@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group"
              aria-label="Send Email"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
