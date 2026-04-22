export default function DemoVideo() {
  const logoPoster = "/images/logo-20260329.png";

  return (
    <section
      id="demo"
      className="py-24"
      style={{ backgroundColor: "var(--color-dark-deepest)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            See Macaco in Action
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Watch how to create and run an automated test in minutes, no code needed
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="relative group">
              <div
                className="absolute -inset-4 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"
                style={{ background: "linear-gradient(to right, rgba(255,249,18,0.2), rgba(255,249,18,0.15))" }}
              />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
                <video
                  className="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
                  controls
                  preload="metadata"
                  poster={logoPoster}
                >
                  <source src="/images/demo.mov" type="video/quicktime" />
                  <source src="/images/demo.mov" type="video/mp4" />
                  Your browser does not support the video element.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
