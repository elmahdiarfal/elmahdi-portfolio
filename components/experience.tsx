import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building2 } from "lucide-react"

export function Experience() {
  const experience = {
    company: "Orange Business Maroc",
    location: "Rabat, Morocco",
    position: "Full-Stack Developer Intern",
    period: "July 2025 – Ongoing",
    type: "Internship",
    achievements: [
      "Collaborated in a development team with other interns to design and implement a malware detection platform",
      "Developed both the backend and frontend, integrating data processing, model inference, and user interface components",
      "Built RESTful APIs to manage malware data and detection results efficiently",
      "Designed an intuitive web interface for real-time monitoring and analysis of malware samples",
    ],
    technologies: ["Full-Stack Development", "RESTful APIs", "Data Processing", "Model Inference", "UI/UX Design"],
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience in software development and cybersecurity solutions
            </p>
          </div>

          {/* Experience Card */}
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground mb-1">{experience.position}</CardTitle>
                    <p className="text-primary font-semibold">{experience.company}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="px-3 py-1">
                  {experience.type}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Basic Info */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Technologies & Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-3 py-1 hover:bg-secondary/10 hover:border-secondary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
