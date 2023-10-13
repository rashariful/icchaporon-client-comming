import { useState } from "react";

export default function Home() {
  const [days, setdays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const x = setInterval(function () {
    const countDownDate = new Date("october 20, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      // stop timer
    } else {
      setdays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  }, 1000);

  return (
    <main className="flex flex-col min-h-screen justify-center text-center">
      <h1 className="text-5xl uppercase font-bold text-center text-slate-700 mb-5">
        {/* Coming Soon{" "} */}
      </h1>
      <h1 className="text-5xl uppercase font-bold text-center text-[#93278F] mb-5">
      www.Icchaporon.com
      </h1>
      <p className="text-gray-500">
        <b>Icchaporon.com</b> is a best E-commerce solution in Dhaka Bangladesh.
      </p>
      <div className="mt-12">
        <input
          type="email"
          placeholder="Enter your Email"
          className="input input-bordered rounded-r-none  w-full max-w-xs"
        />
        <button className="bg-[#93278F] text-base-100 font-semibold py-3 px-6 rounded-r-md ">
          Send
        </button>
      </div>
      {/* start comdown */}
      <div className="flex justify-center mt-10">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col bg-blue-600 p-2 rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": days }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-[#93278F] rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-sky-500 rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-slate-600 rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": seconds }}> {seconds}</span>
            </span>
            sec
          </div>
        </div>
      </div>
      {/* <imageSlider/> */}
    </main>
  );
}
