import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      {/* Picture Section */}
      {/* Resume Content */}
      <div className="max-w-2xl bg-white p-12 rounded-lg shadow-lg">
        <div className="w-44 h-32 mb-6">
          <Image
            src="/images/me.jpg"
            alt="Izhar Ahmed"
            width={328}
            height={128}
            //   className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Izhar Ahmed</h1>
        <p className="text-gray-800 mb-4">
          Hello! I'm Izhar, a passionate web developer and current student at
          the Governor of Sindh's Initiative for AI, Metaverse, Web 3.0, and
          Blockchain (GIAIC). With a strong foundation in HTML, CSS, and
          TypeScript, I'm expanding my expertise in Next.js to bring dynamic,
          modern web applications to life.
        </p>
        <p className="text-gray-800 mb-4">
          My mission is to develop tech-savvy professionals capable of
          contributing to the evolving digital ecosystem. We aim to provide
          students with a deep understanding of AI, blockchain, Web 3.0, and the
          metaverse, preparing them to meet the demands of tomorrow's workforce.
        </p>

        <h2 className="text-xl font-semibold text-indigo-600 mb-2">
          Comprehensive Curriculum
        </h2>
        <p className="text-gray-800 mb-4">
          Covering AI, blockchain, decentralized web, and metaverse
          technologies.
        </p>

        <h2 className="text-xl font-semibold text-indigo-600 mb-2">
          Expert In
        </h2>
        <p className="text-gray-800 mb-4">
          HTML, CSS, TypeScript/JavaScript, Next.js
        </p>

        <h2 className="text-xl font-semibold text-indigo-600 mb-2">
          Networking
        </h2>
        <p className="text-gray-800">
          A growing community of like-minded individuals and getting access to
          career opportunities globally.
        </p>
      </div>
    </div>
  );
}
