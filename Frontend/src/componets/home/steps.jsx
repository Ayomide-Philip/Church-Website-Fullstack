const step = [
  {
    title: "Acknowledge Your Need for Christ",
    description:
      "Acknowledge that you are a sinner and need Jesus for forgiveness and salvation.",
  },
  {
    title: "Repent from Sin",
    description:
      "Repent by turning away from sin and seeking God's mercy with a sincere heart.",
  },
  {
    title: "Believe in Jesus Christ",
    description:
      "Believe that Jesus died for your sins and rose again to give you life.",
  },
  {
    title: "Confess and Accept Jesus as Lord",
    description:
      "Confess Jesus as your Lord and surrender your life completely to His guidance.",
  },
];
export default function Step() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-10 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-5">
          <h1 class="text-3xl font-extrabold title-font mb-4 text-white tracking-widest">
            5 Powerful Steps to Give Your Life to Christ and Transform Your
            Future
          </h1>
        </div>
        <div class="flex flex-wrap w-full">
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {step.map((steps) => {
              return (
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                      {steps.title}
                    </h2>
                    <p class="leading-relaxed">{steps.description}</p>
                  </div>
                </div>
              );
            })}

            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  Finally, Live a Christ-Centered Life
                </h2>
                <p class="leading-relaxed">
                  Live daily in faith, prayer, Bible study, and fellowship with
                  other believers.
                </p>
              </div>
            </div>
          </div>
          <img
            class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="/images/step.jpg"
            alt="step"
          />
        </div>
      </div>
    </section>
  );
}
