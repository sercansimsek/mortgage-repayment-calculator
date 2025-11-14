export const App = () => {
  return (
    <div>
      <div className="w-[375px] py-8 px-6 font-Jakarta">
        <div className="flex flex-col gap-2 mb-6">
          <span>Mortgage Calculator</span>
          <button type="button" className="underline text-left">
            Clear All
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <dsiv className="flex flex-col gap-2">
            <h3>Mortgagae Amount</h3>
            <div className="flex items-center border-2 border-slate300 rounded-md overflow-hidden focus-within:border-lime transition">
              <span className="bg-slate100 px-4 py-3 text-slate700 font-bold text-lg">
                £
              </span>
              <input
                type="number"
                placeholder="0"
                className="flex-1 px-4 py-3 outline-none text-slate900 font-bold text-lg placeholder-slate300"
              />
            </div>
          </dsiv>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3>Mortgage Term</h3>
              <div className="flex items-center border-2 border-slate300 rounded-md overflow-hidden focus-within:border-lime transition">
                <input
                  type="number"
                  placeholder="0"
                  className="flex-1 min-w-0 px-4 py-3 outline-none text-slate900 font-bold text-lg placeholder-slate300"
                />
                <span className="bg-slate100 px-4 py-3 text-slate700 font-bold text-lg flex-shrink-0">
                  years
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3>Interest Rate</h3>
              <div className="flex items-center border-2 border-slate300 rounded-md overflow-hidden focus-within:border-lime transition">
                <input
                  type="number"
                  placeholder="0"
                  className="flex-1 px-4 py-3 outline-none text-slate900 font-bold text-lg placeholder-slate300"
                />
                <span className="bg-slate100 px-4 py-3 text-slate700 font-bold text-lg">
                  %
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-slate700">Mortgage Type</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-4 p-4 border-2 border-slate300 rounded-md has-[:checked]:border-lime has-[:checked]:bg-lime/20 transition cursor-pointer">
                <input
                  type="radio"
                  name="mortgageType"
                  className="accent-lime"
                />
                <span className="font-bold text-slate900">Repayment</span>
              </label>
              <label className="flex items-center gap-4 p-4 border-2 border-slate300 rounded-md has-[:checked]:border-lime has-[:checked]:bg-lime/20 transition cursor-pointer">
                <input
                  type="radio"
                  name="mortgageType"
                  className="accent-lime"
                />
                <span className="font-bold text-slate900">Interest Only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
