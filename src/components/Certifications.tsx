import React from "react";
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

const certifications = [
  // Featured certifications first
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.ai & Stanford University",
    description:
      "Comprehensive course covering supervised learning, neural networks, and practical ML applications.",
    badge: null,
    featured: true,
    group: "AI/ML",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.ai",
    description:
      "Advanced deep learning concepts including CNNs, RNNs, and sequence models.",
    badge: null,
    featured: true,
    group: "AI/ML",
  },
  {
    title: "AWS Academy - Cloud Web Application Builder",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Training in building and deploying cloud-based web applications using AWS services and architecture best practices.",
    badge: awsCert,
    featured: true,
    group: "AWS",
  },

  // Azure group
  {
    title: "Configure Virtual Networks",
    issuer: "Microsoft",
    description:
      "Completed training on configuring and managing Azure virtual networks.",
    badge: azureVirtualNetworks,
    featured: false,
    group: "Azure",
  },
  {
    title: "Describe Azure Identity, Access, and Security",
    issuer: "Microsoft",
    description:
      "Understanding Azure identity services, access management, and security concepts.",
    badge: azureIdentity,
    featured: false,
    group: "Azure",
  },
  {
    title: "Introduction to Azure Virtual Machines",
    issuer: "Microsoft",
    description:
      "Fundamentals of creating and managing virtual machines in Azure.",
    badge: azureVirtualMachines,
    featured: false,
    group: "Azure",
  },
  {
    title: "Explore Relational Database Services in Azure",
    issuer: "Microsoft",
    description:
      "Understanding Azure's relational database services and their applications.",
    badge: azureDatabase,
    featured: false,
    group: "Azure",
  },
  {
    title: "Add and Size Disks in Azure Virtual Machines",
    issuer: "Microsoft",
    description: "Managing storage and disk configurations for Azure VMs.",
    badge: azureDisks,
    featured: false,
    group: "Azure",
  },
  {
    title: "Configure Azure Blob Storage",
    issuer: "Microsoft",
    description:
      "Setting up and managing Azure Blob Storage for cloud data solutions.",
    badge: azureBlobStorage,
    featured: false,
    group: "Azure",
  },

  // AWS group continued
  {
    title: "AWS SimuLearn: Databases in Practice",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Hands-on experience with AWS database services and best practices.",
    badge: awsDatabases,
    featured: false,
    group: "AWS",
  },
  {
    title: "AWS SimuLearn: Core Security Concepts",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Core security principles and implementation in AWS environments.",
    badge: awsSecurity,
    featured: false,
    group: "AWS",
  },
];

// Group certifications by the "group" field
const groupedCerts = certifications.reduce((acc, cert) => {
  if (!acc[cert.group]) acc[cert.group] = [];
  acc[cert.group].push(cert);
  return acc;
}, {});

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="w-full max-w-7xl mx-auto px-6 py-16 sm:py-24 font-inter"
      aria-label="Certifications section"
    >
      <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 md:text-left text-center relative inline-block">
        Certifications
        <span className="block mx-auto md:mx-0 mt-2 h-1 rounded bg-[#06B6D4] w-[80px]" />
      </h2>

      <div className="space-y-12">
        {Object.entries(groupedCerts).map(([group, certs]) => (
          <div key={group}>
            <h3 className="text-2xl font-semibold text-[#06B6D4] mb-6">
              {group}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {certs.map((cert) => (
                <article
                  key={cert.title}
                  tabIndex={0}
                  className={`bg-white rounded-2xl shadow-lg p-6 flex transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#06B6D4] ${
                    cert.featured ? "lg:col-span-2 xl:col-span-2" : ""
                  }`}
                >
                  <div className="flex-shrink-0">
                    {cert.badge ? (
                      <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-[#d1f1fb]">
                        <img
                          src={cert.badge}
                          alt={cert.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#d1f1fb]">
                        <Award className="w-10 h-10 text-[#06B6D4]" />
                      </div>
                    )}
                  </div>
                  <div className="ml-6 flex flex-col justify-center flex-1">
                    <h4
                      className={`font-extrabold text-[#06B6D4] leading-tight ${
                        cert.featured ? "text-xl" : "text-lg"
                      }`}
                    >
                      {cert.title}
                    </h4>
                    <p className="text-gray-700 font-semibold text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {cert.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
