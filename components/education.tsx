import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap } from "lucide-react"

export function Education() {
  const education = {
    institution: "National Institute of Posts and Telecommunications - INPT",
    location: "Rabat, Morocco",
    degree: "Smart Information and Communication Technology (SMART-ICT)",
    period: "2023 – Expected 2026",
    concentration: "Computer Networking & Telecommunications",
    description:
      "Comprehensive program covering networking technologies, cloud computing, and telecommunications systems.",
  }

  const keySubjects = [
    "Network Protocols & Architecture",
    "Cloud Computing & Virtualization",
    "3G, 4G & 5G Mobile Networks",
    "Network Security",
    "IoT & Smart Systems",
    "Data Communications",
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation in networking and cloud technologies
            </p>
          </div>

          {/* Education Card */}
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground mb-1">{education.degree}</CardTitle>
                    <p className="text-primary font-semibold">{education.institution}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="px-3 py-1">
                  Current Student
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Basic Info */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Concentration */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Concentration</h4>
                <Badge variant="outline" className="px-3 py-1">
                  {education.concentration}
                </Badge>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Program Overview</h4>
                <p className="text-muted-foreground leading-relaxed">{education.description}</p>
              </div>

              {/* Key Subjects */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Key Subjects & Technologies</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {keySubjects.map((subject, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-3 py-2 text-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-colors"
                    >
                      {subject}
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
