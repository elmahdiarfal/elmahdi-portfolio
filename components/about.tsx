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
                  specializing in Smart Information and Communication Technology with a strong focus on Cisco networking technologies.
                </p>
                <p className="text-foreground leading-relaxed">
                  My expertise centers on configuring and managing Cisco routers and switches, designing robust enterprise networks, and implementing advanced routing and switching solutions and automation using Ansible. I also have hands-on experience in cloud networking using AWS, leveraging automation tools like Terraform to streamline infrastructure deployment and management.
                </p>
                <p className="text-foreground leading-relaxed">
                  Additionally, I have practical exposure to 5G network concepts and deployment. I am currently seeking an end-of-studies internship (PFE) to apply my skills in real-world projects and contribute to innovative networking solutions in a professional environment.
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
