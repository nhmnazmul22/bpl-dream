import Container from "../Layout/Container";

const Subscribe = () => {
  return (
    <section className="relative z-50 bottom-[-175px] ">
      <Container>
        <div className="bg-white bg-shadow p-5 rounded-2xl mt-10  min-h-[350px] flex justify-center items-center border border-gray-200">
          <div className={`text-center space-y-4 sm:space-y-6`}>
            <h1 className="text-black text-3xl sm:text-4xl md:text-[40px] font-bold">
              Subscribe to our Newsletter
            </h1>
            <p className="text-gray-600 text-base sm:text-2xl">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex max-sm:flex-col justify-between items-center gap-5 sm:h-[50px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="input max-sm:py-4 sm:h-full flex-1 rounded-2xl"
              />
              <button className="btn border-0 h-[50px] sm:h-full bg-[#E7FE29] inset-shadow-md rounded-2xl bg-linear-to-r from-pink-500 from-5% to-yellow-500 px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
