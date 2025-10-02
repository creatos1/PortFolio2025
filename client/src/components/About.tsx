import { Card } from "@/components/ui/card";
import { experience, education, achievements } from "@/data/portfolio";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
            Sobre Mí
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg" data-testid="text-about-description">
            Diseñador digital y desarrollador web en formación, apasionado por
            crear experiencias visuales atractivas y funcionales. Ganador del
            1er lugar en Hackathon Smart Security Aguascalientes 2023.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Experiencia Profesional
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <Card key={exp.id} className="p-6">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold" data-testid={`text-experience-company-${exp.id}`}>
                      {exp.company}
                    </h4>
                    <p className="text-primary font-medium" data-testid={`text-experience-position-${exp.id}`}>
                      {exp.position}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Formación Académica
            </h3>
            <div className="space-y-6 mb-8">
              {education.map((edu, idx) => (
                <Card key={idx} className="p-6">
                  <h4 className="text-lg font-semibold mb-2" data-testid={`text-education-degree-${idx}`}>
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium" data-testid={`text-education-institution-${idx}`}>
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.period} • {edu.location}
                  </p>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Logros Destacados
            </h3>
            <Card className="p-6">
              <ul className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-sm flex items-start gap-2"
                    data-testid={`text-achievement-${idx}`}
                  >
                    <span className="text-primary mt-1">🏆</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
