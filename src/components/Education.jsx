const Education = () => {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-orange-500 mb-10">
        Education
      </h2>

      <div className="border border-gray-700 rounded-2xl p-8 bg-[#111] space-y-6">
  
  {/* First Education Item */}
  <div>
    <h3 className="text-2xl font-semibold mb-2 text-orange-500">
      Complete Web Development Course
    </h3>
    <p className="text-lg text-gray-300 font-medium">
      Programming Hero (Batch-13)
    </p>
    <p className="text-gray-500">2025 - Present</p>
  </div>

  {/* Divider Line */}
  <div className="border-t border-gray-800"></div>

  {/* Second Education Item */}
  <div>
    <h3 className="text-2xl font-semibold mb-2 text-orange-500">
      Master of Arts (MA) in Islamic Studies
    </h3>
    <p className="text-lg text-gray-300 font-medium">
      Al-Haiatul Ulya Lil-Jami'atil Qawmiya, Bangladesh
    </p>
    <p className="text-gray-500">
      Graduated: 2021
    </p>
  </div>

</div>

    </section>
  );
};

export default Education;
