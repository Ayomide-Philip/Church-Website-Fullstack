const team = [
  {
    name: "Rev. Dr. Adedeji Emmanuel Ade",
    role: "UI Developer",
    image: "seniorRved",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Rev. Dr. Wuyi Oke",
    role: "Designer",
    image: "assistantSeniorRved",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Rev. Dr. Damola Adeyefa",
    role: "Designer",
    image: "englishRved",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "Rev. Miss Florence  Adedeji",
    role: "UI Developer",
    image: "rvedMiss",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
];

export default function Team() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-white tracking-widest">
            GUIDING LIGHTS
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our church team is a dedicated group of pastors, leaders, and
            volunteers committed to serving God and our community. With faith,
            love, and unity, we work together to inspire, support, and guide
            others in their spiritual journey.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {team.map((members) => {
            return (
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={`/images/leaders/guidingLight/${members.image}.jpg`}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">
                      {members.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{members.role}</h3>
                    <p className="mb-4">{members.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/leaders"
            className="inline-flex bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600  text-lg  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Meet the Leaders
          </a>
        </div>
      </div>
    </section>
  );
}
