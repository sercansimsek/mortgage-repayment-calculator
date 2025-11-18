import calculatorImg from "./assets/images/icon-calculator.svg";
import footerImg from "./assets/images/illustration-empty.svg";

export const App = () => {
  return (
    <div className="bg-slate300/35">
      <div className="w-[375px] flex flex-col mx-auto">
        <div className=" py-8 px-6 font-Jakarta bg-white">
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-slate900 text-2xl font-medium">Mortgage Calculator</span>
            <button
              type="button"
              className="underline text-left cursor-pointer text-slate700"
            >
              Clear All
            </button>
          </div>

          <div className="flex flex-col gap-6 text-slate700">
            <div className="flex flex-col gap-2">
              <h3>Mortgagae Amount</h3>
              <div className="group flex items-center border-2 border-slate300 rounded-md overflow-hidden focus-within:border-lime transition">
                <label
                  className="bg-slate100 px-4 py-3 text-slate700 font-bold text-lg transition group-focus-within:bg-lime group-focus-within:text-slate900"
                  htmlFor="amount"
                >
                  £
                </label>
                <input
                  id="amount"
                  type="number"
                  placeholder="0"
                  className="flex-1 px-4 py-3 outline-none text-slate900 font-bold text-lg placeholder-slate300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3>Mortgage Term</h3>
                <div className="group flex items-center border-2 border-slate300 rounded-md overflow-hidden focus-within:border-lime transition">
                  <input
                    id="term"
                    type="number"
                    placeholder="0"
                    className="flex-1 min-w-0 px-4 py-3 outline-none text-slate900 font-bold text-lg placeholder-slate300"
                  />
                  <label
                    className="bg-slate100 px-4 py-3 text-slate700 font-bold text-lg flex-shrink-0 transition group-focus-within:bg-lime group-focus-within:text-slate900"
                    htmlFor="term"
                  >
                    years
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3>Interest Rate</h3>
                <div className="group flex items-center border-2 border-slate300 rounded-md overflow-hidden focus-within:border-lime transition">
                  <input
                    id="rate"
                    type="number"
                    placeholder="0"
                    className="flex-1 px-4 py-3 outline-none text-slate900 font-bold text-lg placeholder-slate300"
                  />
                  <label
                    className="bg-slate100 px-4 py-3 text-slate700 font-bold text-lg transition group-focus-within:bg-lime group-focus-within:text-slate900"
                    htmlFor="rate"
                  >
                    %
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-slate700">Mortgage Type</h3>
              <div className="flex flex-col gap-2">
                <label
                  className="flex items-center gap-4 p-4 border-2 border-slate300 rounded-md has-[:checked]:border-lime has-[:checked]:bg-lime/20 transition cursor-pointer"
                  htmlFor="repayment"
                >
                  <input
                    id="repayment"
                    type="radio"
                    name="mortgageType"
                    className="accent-lime"
                  />
                  <span className="font-bold text-slate900">Repayment</span>
                </label>
                <label
                  className="flex items-center gap-4 p-4 border-2 border-slate300 rounded-md has-[:checked]:border-lime has-[:checked]:bg-lime/20 transition cursor-pointer"
                  htmlFor="Interest-only"
                >
                  <input
                    id="Interest-only"
                    type="radio"
                    name="mortgageType"
                    className="accent-lime"
                  />
                  <span className="font-bold text-slate900">Interest Only</span>
                </label>
              </div>
            </div>

            <button className="flex gap-3 items-center justify-center rounded-4xl border-lime p-4 bg-lime cursor-pointer hover:bg-lime/45">
              <img src={calculatorImg} alt="calculator" />
              <span className="text-slate900 font-bold">
                Calculate Repayments
              </span>
            </button>
          </div>
        </div>
        <footer className="bg-slate900 px-6 py-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src={footerImg}
              alt="empty icon"
              className="h-[192px] w-[192px]"
            />
            <h3 className="text-white text-2xl font-semibold">
              Results shown here
            </h3>
            <p className="text-center text-slate300 text-base font-medium">
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
