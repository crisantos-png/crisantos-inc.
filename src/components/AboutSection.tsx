
import { useState } from 'react';
import { Code, Layout, Server, Database, Lightbulb, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const AboutSection = () => {
  const [skillCategories] = useState<SkillCategory[]>([
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-blue" />,
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-red" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-gold" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "Redis", level: 65 },
        { name: "Prisma", level: 70 },
      ],
    },
    {
      title: "Other",
      icon: <Code className="h-6 w-6 text-silver" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Testing", level: 80 },
      ],
    },
  ]);

  return (
    <section id="about" className="section">
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6">
            About <span className="text-blue-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm a passionate web developer with a focus on creating fast, responsive, and accessible websites and applications. 
            With several years of experience in both frontend and backend development, 
            I enjoy solving complex problems and turning ideas into reality.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue/10 mb-2">
                <Code className="h-6 w-6 text-blue" />
              </div>
              <h4 className="font-medium">Clean Code</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red/10 mb-2">
                <Layout className="h-6 w-6 text-red" />
              </div>
              <h4 className="font-medium">Responsive</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-2">
                <Lightbulb className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-medium">Intuitive</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-silver/10 mb-2">
                <Clock className="h-6 w-6 text-silver" />
              </div>
              <h4 className="font-medium">Efficient</h4>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center mb-8">My <span className="text-gold-gradient">Skills</span></h3>
          <Tabs defaultValue="Frontend" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.title} value={category.title} className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.title} value={category.title}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category.icon}
                      <span>{category.title} Development Skills</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
