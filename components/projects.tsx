import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Network, Cloud, Shield } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "5G Network Testbed with Network Slicing",
      description:
        "Designed and deployed a complete 5G network testbed across four Ubuntu Server 22.04 VMs using VMware, including Core C-Plane, Core U-Plane, gNB, and multiple UEs.",
      longDescription:
        "Built and configured gNB and UE instances using UERANSIM, ensuring full end-to-end connectivity and real-time monitoring of network functions. Configured Open5GS for control and user planes, set up MongoDB subscriber databases, and implemented network slices meeting eMBB, URLLC, and mMTC requirements.",
      technologies: ["Open5gs", "UERANSIM", "MongoDB", "Bash Scripting", "VMware", "Ubuntu Server"],
      category: "Final-Year Project",
      icon: <Network className="h-6 w-6" />,
      image: "/5g-network-infrastructure-diagram-with-multiple-co.jpg",
      highlights: [
        "Full-Stack Network Engineer role",
        "End-to-end 5G connectivity",
        "Network slicing implementation",
        "Real-time monitoring system",
      ],
    },
    {
      title: "Dual-VPC Cloud Infrastructure on AWS",
      description:
        "Designed and deployed an isolated cloud environment with 2 VPCs, public/private subnets, ACLs, Security Groups, Internet & NAT Gateways, VPC Peering, S3 Endpoints, and CloudWatch VPC Flow Logs.",
      longDescription:
        "Fully automated infrastructure provisioning and management using Terraform, ensuring reproducibility and scalability. Implemented comprehensive security measures and monitoring solutions for enterprise-grade cloud architecture.",
      technologies: ["AWS", "Terraform", "VPC", "CloudWatch", "S3", "IAC"],
      category: "Personal Project",
      icon: <Cloud className="h-6 w-6" />,
      image: "/aws-cloud-architecture-diagram-with-vpcs-and-netwo.jpg",
      highlights: ["Infrastructure as Code", "Multi-VPC architecture", "Automated provisioning", "Enterprise security"],
    },
    {
      title: "Bank Network Infrastructure",
      description:
        "Designed and implemented a multi-tier network architecture for 11 departments with full segmentation using subnets and VLANs using Cisco Packet Tracer.",
      longDescription:
        "Configured dynamic routing (OSPF), redundancy protocols (HSRP, STP), and essential services (DHCP, DNS, NAT, Web/Mail/FTP). Simulated ISP connectivity and secured the network with SSH authentication, port security, and ACLs.",
      technologies: ["Cisco Packet Tracer", "OSPF", "HSRP", "STP", "VLAN", "ACLs"],
      category: "Personal Project",
      icon: <Shield className="h-6 w-6" />,
      image: "/enterprise-network-topology-diagram-with-multiple-.jpg",
      highlights: [
        "Multi-tier architecture",
        "Network segmentation",
        "Redundancy protocols",
        "Security implementation",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience with cutting-edge networking and cloud technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 lg:p-8">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">{project.icon}</div>
                        <Badge variant="outline" className="px-2 py-1 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl lg:text-2xl text-foreground mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      {/* Key Highlights */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Key Highlights</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies Used</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="px-2 py-0.5 text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Github className="h-4 w-4" />
                          Source Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
