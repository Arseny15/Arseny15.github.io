import React from 'react';

const SKILLS = {
  webTechnologies: [
    "React.js",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "jQuery",
    "Angular",
  ],
  programmingLanguages: [
    "Java",
    "C",
    "C++",
    "Python",
    "SQL",
    "Swift",
  ],
  dataScience: [
    "TensorFlow",
    "Keras",
    "NumPy",
    "Matplotlib",
    "OpenCV",
    "Pandas",
    "scikit-learn",
  ],
  databases: [
    "MongoDB",
    "Firebase",
    "MySQL",
    "Oracle DB",
    "Chrome DB",
  ],
  miscellaneous: [
    "Git",
    "REST APIs",
    "Linux",
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
  ],
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-2xl bg-sky-600/20 px-4 py-2 text-sm font-medium text-sky-200 ring-1 ring-inset ring-sky-400/30 hover:bg-sky-600/30 hover:ring-sky-400/50 hover:scale-105 transition-all duration-200 ease-in-out">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border p-4 sm:p-6 ${className}`}>{children}</div>;
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-2">{children}</div>;
}

function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

const TechnicalSkillsSection: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold text-sky-300">Technical Skills</h2>
        <div className="content mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Card className="border-white/10 bg-white/5 group hover:bg-white/10 hover:border-sky-300/30 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer min-h-[280px] flex flex-col p-6">
            <CardHeader>
              <CardTitle className="text-xl text-left flex items-center gap-3 mb-4">
                <span className="text-3xl">🌐</span>
                Web Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-start">
              <div className="flex flex-wrap gap-3">
                {SKILLS.webTechnologies.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 group hover:bg-white/10 hover:border-sky-300/30 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer min-h-[280px] flex flex-col p-6">
            <CardHeader>
              <CardTitle className="text-xl text-left flex items-center gap-3 mb-4">
                <span className="text-3xl">💻</span>
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-start">
              <div className="flex flex-wrap gap-3">
                {SKILLS.programmingLanguages.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 group hover:bg-white/10 hover:border-sky-300/30 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer min-h-[280px] flex flex-col p-6">
            <CardHeader>
              <CardTitle className="text-xl text-left flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                Data Science
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-start">
              <div className="flex flex-wrap gap-3">
                {SKILLS.dataScience.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 group hover:bg-white/10 hover:border-sky-300/30 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer min-h-[280px] flex flex-col p-6">
            <CardHeader>
              <CardTitle className="text-xl text-left flex items-center gap-3 mb-4">
                <span className="text-3xl">🗄️</span>
                Databases
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-start">
              <div className="flex flex-wrap gap-3">
                {SKILLS.databases.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 group hover:bg-white/10 hover:border-sky-300/30 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer min-h-[280px] flex flex-col p-6">
            <CardHeader>
              <CardTitle className="text-xl text-left flex items-center gap-3 mb-4">
                <span className="text-3xl">🛠️</span>
                Miscellaneous
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-start">
              <div className="flex flex-wrap gap-3">
                {SKILLS.miscellaneous.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;
