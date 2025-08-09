import "../home/Features.css";

export default function Features() {
  return (
    <div className="features mx-auto max-w-7xl px-4 sm:px-6 lg:px-14  md:-my-88 lg:my-0 lg:bottom-72 relative">
      <div className="absolute inset-x-7  inset-y-0 lg:inset-x-12  bg-zinc-800 opacity-50 bottom-0 lg:bottom-0  mask-b-from-0 rounded-2xl border border-transparent"></div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-7 items-center  relative  z-10">

        <div className="text-center">
          <img src="/asset-svg-16.svg" alt="" className="w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold   text-white">Free Shipping</h3>
          <p className="text-zinc-300 text-sm">
            Free shipping on all US orders
          </p>
        </div>

        <div className="text-center">
          <img src="../public/asset-svg-18.svg" alt="" className="w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white">
            100% Money Back
          </h3>
          <p className="text-zinc-300 text-sm">You have 10 days to return</p>
        </div>

        <div className="text-center">
          <img src="/asset-svg-20.svg" alt="icon-Support" className="w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white">Support 24/7</h3>
          <p className="text-zinc-300 text-sm">Contact us 24 hours a day</p>
        </div>

        <div className="text-center">
          <img src="/asset-svg-22.svg" alt="icon-Support" className="w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white">
            100% Payment Secure
          </h3>
          <p className="text-zinc-300 text-sm">Your payment are safe with us</p>
        </div>

      </div>
    </div>
  );
}
