export default function Cta() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-sky-500/100">
                Welcome
              </h2>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Gateway Baptist Church: Where Faith Meets Community
              </p>

              <p className="mt-6 text-lg/8 text-gray-600">
                At Gateway Baptist Church, we extend a heartfelt welcome to you.
                Our church is a place where faith and community converge,
                forming the cornerstone of our identity.
              </p>

              <p className="mt-6 text-lg/8 text-gray-600">
                Join us as we worship together, study the Word, and engage in
                meaningful fellowship. Experience the warmth of our community
                and discover how faith can enrich your life. At Gateway Baptist
                Church, you'll find not just a place of worship, but a family
                ready to welcome you with open arms.
              </p>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/images/cta-image.jpg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
