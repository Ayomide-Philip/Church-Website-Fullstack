const explore = [
  {
    images: "history",
    category: "Our Identity",
    title: "History of The Church",
    description:
      "Our church's mission is to spread faith, love, and hope, guiding people toward spiritual growth and a deeper connection with God.",
    link: "/history",
  },
  {
    images: "mission",
    category: "Our Identity",
    title: "Mission of The Church",
    description:
      "Founded years ago, our church has grown through dedication, faith, and service, impacting countless lives within the community and beyond.",
    link: "/missionandvission",
  },
  {
    images: "donate-pic",
    category: "Donation",
    title: "Donation to The Church",
    description:
      "Generous donations help sustain our ministries, support the needy, and expand our outreach efforts, making a lasting difference in people’s lives.",
    link: "/donate",
  },
];

export default function Explore() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="text-3xl font-medium title-font mb-4 text-black tracking-widest">
            Explore Our Church
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {explore.map(
            ({ images, category, title, description, link }, idx) => {
              return (
                <div className="p-4 md:w-1/3" key={idx}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`/images/${images}.jpg`}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {title}
                      </h1>
                      <p className="leading-relaxed mb-3">{description}</p>
                      <div className="flex items-center flex-wrap">
                        <a
                          className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0"
                          href={link}
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
