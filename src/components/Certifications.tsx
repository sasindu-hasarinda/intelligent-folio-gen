import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import awsCert from "@/assets/aws-cert.png";
import azureVirtualNetworks from "@/assets/azure-virtual-networks.png";
import azureIdentity from "@/assets/azure-identity.png";
import azureVirtualMachines from "@/assets/azure-virtual-machines.png";
import azureDatabase from "@/assets/azure-database.png";
import azureDisks from "@/assets/azure-disks.png";
import azureBlobStorage from "@/assets/azure-blob-storage.png";
import awsDatabases from "@/assets/aws-databases.png";
import awsSecurity from "@/assets/aws-security.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.ai & Stanford University",
      description: "Comprehensive course covering supervised learning, neural networks, and practical ML applications.",
      badge: null,
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.ai",
      description: "Advanced deep learning concepts including CNNs, RNNs, and sequence models.",
      badge: null,
    },
    {
      title: "AWS Academy - Cloud Web Application Builder",
      issuer: "Amazon Web Services (AWS)",
      description: "Training in building and deploying cloud-based web applications using AWS services and architecture best practices.",
      badge: awsCert,
    },
    {
      title: "Configure Virtual Networks",
      issuer: "Microsoft",
      description: "Completed training on configuring and managing Azure virtual networks.",
      badge: azureVirtualNetworks,
    },
    {
      title: "Describe Azure Identity, Access, and Security",
      issuer: "Microsoft",
      description: "Understanding Azure identity services, access management, and security concepts.",
      badge: azureIdentity,
    },
    {
      title: "Introduction to Azure Virtual Machines",
      issuer: "Microsoft",
      description: "Fundamentals of creating and managing virtual machines in Azure.",
      badge: azureVirtualMachines,
    },
    {
      title: "Explore Relational Database Services in Azure",
      issuer: "Microsoft",
      description: "Understanding Azure's relational database services and their applications.",
      badge: azureDatabase,
    },
    {
      title: "Add and Size Disks in Azure Virtual Machines",
      issuer: "Microsoft",
      description: "Managing storage and disk configurations for Azure VMs.",
      badge: azureDisks,
    },
    {
      title: "Configure Azure Blob Storage",
      issuer: "Microsoft",
      description: "Setting up and managing Azure Blob Storage for cloud data solutions.",
      badge: azureBlobStorage,
    },
    {
      title: "AWS SimuLearn: Databases in Practice",
      issuer: "Amazon Web Services (AWS)",
      description: "Hands-on experience with AWS database services and best practices.",
      badge: awsDatabases,
    },
    {
      title: "AWS SimuLearn: Core Security Concepts",
      issuer: "Amazon Web Services (AWS)",
      description: "Core security principles and implementation in AWS environments.",
      badge: awsSecurity,
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  {cert.badge ? (
                    <div className="w-20 h-20 flex-shrink-0">
                      <img 
                        src={cert.badge} 
                        alt={cert.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                    <p className="text-primary font-semibold text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
