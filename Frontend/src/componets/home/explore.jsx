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
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-5">
          <h1 class="text-3xl font-medium title-font mb-4 text-black tracking-widest">
            Explore Our Church
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          {explore.map((explore) => {
            return (
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={`/images/${explore.images}.jpg`}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {explore.category}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      {explore.title}
                    </h1>
                    <p class="leading-relaxed mb-3">{explore.description}</p>
                    <div class="flex items-center flex-wrap">
                      <a
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href={explore.link}
                      >
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
          })}
        </div>
      </div>
    </section>
  );
}
