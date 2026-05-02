import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">

        <div>
          <h2 className="text-orange-500 text-xl mb-2">
            Hello I'm
          </h2>

          <h1 className="text-5xl font-bold mb-4">
            Sheikh Muzammil
          </h1>
          <h3 className="text-2xl text-gray-300 mb-6">
            MERN Stack Developer
          </h3>

          <p className="text-gray-400 mb-6 leading-7">
            I build modern responsive websites using Next.js,
            React, Tailwind CSS and modern web technologies.
          </p>

          <div className="flex gap-4 mb-6">
            <a
              href="/resume.pdf"
              download
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold duration-300"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-5 text-3xl text-orange-500">
            <a href="https://github.com/sheikh-muzammil2026">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/sheikh-muzammil-dev?utm_source=share_via&utm_content=profile&utm_medium=member_android">
              <FaLinkedin />
            </a>

            <a href="https://www.facebook.com/share/1Cg4ewRwb1/">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="https://i.ibb.co.com/2Y5p4Qhv/1777688598569.png"
            width={350}
            height={350}
            alt="profile"
            className="rounded-full border-4 border-orange-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
