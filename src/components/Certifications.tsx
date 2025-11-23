import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.ai & Stanford University",
      description: "Comprehensive course covering supervised learning, neural networks, and practical ML applications.",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.ai",
      description: "Advanced deep learning concepts including CNNs, RNNs, and sequence models.",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
