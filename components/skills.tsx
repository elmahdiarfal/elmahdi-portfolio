import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Network, Cloud, Settings, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "Bash"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Networking",
      icon: <Network className="h-5 w-5" />,
      skills: [
        "TCP/IP",
        "OSI",
        "LAN/WAN",
        "OSPF",
        "RIP",
        "EIGRP",
        "BGP",
        "VLAN",
        "VTP",
        "STP",
        "Port Security",
        "HSRP",
        "ACLs",
        "NAT",
        "DHCP",
        "DNS",
        "IPv4/IPv6",
        "QoS",
        "Syslog",
        "SNMP",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Cloud Networking (AWS)",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        "VPC",
        "Subnets",
        "ACLs",
        "Security Groups",
        "NAT Gateways",
        "Internet Gateways",
        "VPC Peering",
        "S3 Endpoints",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "DevOps",
      icon: <Settings className="h-5 w-5" />,
      skills: ["Terraform", "AWS", "GitHub Actions", "Ansible"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git"],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  const proficiencyLevels = [
    { skill: "Network Protocols", level: 90 },
    { skill: "AWS Cloud Services", level: 85 },
    { skill: "Python Programming", level: 80 },
    { skill: "Terraform/IaC", level: 85 },
    { skill: "5G Networks", level: 88 },
    { skill: "DevOps Practices", level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across networking, cloud infrastructure, and development technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Categories */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Core Competencies</h3>
              {skillCategories.map((category, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className={`p-2 rounded-lg ${category.bgColor} ${category.color}`}>{category.icon}</div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="px-2 py-1 text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

              {/* Additional Info */}
              <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Actively expanding knowledge in emerging technologies including 5G network slicing, edge computing,
                    and cloud-native networking solutions. Committed to staying current with industry best practices and
                    certification programs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </section>
  )
}
