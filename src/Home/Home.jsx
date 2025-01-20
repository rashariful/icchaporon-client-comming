import { useState } from "react";

export default function Home() {
  const [days, setdays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const x = setInterval(function () {
    const countDownDate = new Date("January 25, 2025 00:00:00").getTime();
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
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh", // Full screen height
        overflow: "hidden",
      }}
    >
      {/* Background Blur */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${encodeURI(
            "https://img.freepik.com/free-photo/armchair-living-room-with-copy-space_43614-908.jpg?t=st=1737370656~exp=1737374256~hmac=ff7b18126b1f4b1a2a2afeb5ea27d9dcb48222e8b701ec13f6ec3d15cd5bd2d4&w=1060"
          )})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(2px)", // Adjust blur intensity
          zIndex: -1,
        }}
      ></div>

      {/* Content Overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <main className="flex flex-col min-h-screen justify-center text-center">
          <h1 className="text-5xl uppercase font-bold text-center text-slate-50 mb-5">
            {/* Coming Soon{" "} */}
          </h1>
          <h1
            // className=" text-5xl uppercase font-bold text-center text-[#F36F21] mb-5"
            className="text-3xl sm:text-5xl uppercase font-bold text-[#F36F21] mb-5"
          >
            www.Bangladeshinterior.com
          </h1>

          <p
            // className="text-white"
            className="text-white text-lg sm:text-xl max-w-2xl mx-auto"
          >
            <b>Bangladeshinterior.com</b> is a best Interior solution in Dhaka
            Bangladesh.
          </p>
          <div className="mt-12">
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-white input input-bordered rounded-r-none  w-full max-w-xs"
            />
            <button className="text-white bg-[#F36F21] text-base-100 font-semibold py-3 px-6 rounded-r-md ">
              Send
            </button>
          </div>
          {/* start comdown */}
          <div className="flex justify-center mt-10">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className=" flex flex-col bg-blue-600 p-2 rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": days }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-[#F36F21] rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": hours }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-sky-500 rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": minutes }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-slate-600 rounded-box text-white">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": seconds }}> {seconds}</span>
                </span>
                sec
              </div>
            </div>
          </div>
          {/* <imageSlider/> */}
        </main>
      </div>
    </div>
  );
}
