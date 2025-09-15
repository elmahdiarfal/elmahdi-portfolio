import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Target, Users, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Problem-solving",
      description: "Analytical approach to complex networking challenges",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Collaboration",
      description: "Effective teamwork in development environments",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Rapid Adaptation",
      description: "Quick learning of new technologies and frameworks",
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Autonomous Learning",
      description: "Self-directed skill development and research",
    },
  ]

  const languages = ["Arabic", "English", "French"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about bridging the gap between traditional networking and modern cloud technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I'm an engineering student at the National Institute of Posts and Telecommunications (INPT) in Rabat,
                  specializing in Smart Information and Communication Technology with a focus on computer networking.
                </p>
                <p className="text-foreground leading-relaxed">
                  My expertise spans from traditional networking protocols to cutting-edge cloud infrastructure, with
                  hands-on experience in 5G network deployment, AWS cloud architecture, and DevOps automation. I'm
                  passionate about creating scalable, secure network solutions that drive digital transformation.
                </p>
                <p className="text-foreground leading-relaxed">
                  Currently seeking an end-of-studies internship (PFE) to apply my skills in real-world projects and
                  contribute to innovative networking solutions in a professional environment.
                </p>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="outline" className="px-3 py-1">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Core Strengths</h3>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">{highlight.icon}</div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                          <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
