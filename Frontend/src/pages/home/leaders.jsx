import { leader } from "../../componets/home/home";

export default function OurLeader() {
  return (
    <section class="text-gray-600 body-font bg-stone-100">
      <div class="container px-5 py-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
            Guiding Lights and Supportive Ministry of Gateway Baptist Church
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our church team is a dedicated group of pastors, leaders, and
            volunteers committed to serving God and our community. With faith,
            love, and unity, we work together to inspire, support, and guide
            others in their spiritual journey.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {leader.map((leaders) => {
            return (
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-60 h-56 object-cover object-[center_top] mb-4"
                    src={`/images/leaders/${leaders.imageLocation}/${leaders.imageName}.jpg`}
                  />

                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      {leaders.name}
                    </h2>
                    <h3 class="text-gray-500 mb-3">{leaders.role}</h3>
                    <p class="mb-4">{leaders.description}</p>
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
