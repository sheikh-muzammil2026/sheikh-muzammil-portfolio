const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Firebase',
  'MongoDB',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#111]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-orange-500 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-black border border-orange-500 p-6 rounded-2xl text-center hover:scale-105 duration-300"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;