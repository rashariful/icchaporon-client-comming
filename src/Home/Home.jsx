// import { useState } from "react";
// import fashionBd from "../assets/fashion-bd.jpg";

// export default function Home() {
//   const [days, setdays] = useState("00");
//   const [hours, setHours] = useState("00");
//   const [minutes, setMinutes] = useState("00");
//   const [seconds, setSeconds] = useState("00");

//   const x = setInterval(function () {
//     const countDownDate = new Date("February 25, 2025 00:00:00").getTime();
//     const now = new Date().getTime();
//     const distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     if (distance < 0) {
//       // stop timer
//     } else {
//       setdays(days);
//       setHours(hours);
//       setMinutes(minutes);
//       setSeconds(seconds);
//     }
//   }, 1000);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "100vh", // Full screen height
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Blur */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage: `url(${encodeURI(
//             // "https://i.ibb.co.com/SwT7Bf8d/fashion-bd.jpg"
//             fashionBd
//           )})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           filter: "blur(2px)", // Adjust blur intensity
//           zIndex: -1,
//         }}
//       ></div>

//       {/* Content Overlay */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 1,
//           color: "white",
//           padding: "20px",
//           textAlign: "center",
//         }}
//       >
//         <main className="flex flex-col min-h-screen justify-center text-center">
//           <h1 className="text-5xl uppercase font-bold text-center text-slate-50 mb-5">
//             {/* Coming Soon{" "} */}
//           </h1>
//           <h1
//             // className=" text-5xl uppercase font-bold text-center text-[#F36F21] mb-5"
//             className="text-3xl sm:text-5xl uppercase font-bold text-[#F36F21] mb-5"
//           >
//            priyofashionbd.com
//           </h1>

//           <p
//             // className="text-white"
//             className="text-white text-lg sm:text-xl max-w-2xl mx-auto"
//           >
//             <b>priyofashionbd.com</b> is a best Fashion solution in Dhaka
//             Bangladesh.
//           </p>
//           <div className="mt-12 flex items-center justify-center">
//             <input
//               type="email"
//               placeholder="Enter your Email"
//               className="bg-white input input-bordered rounded-r-none  w-full max-w-xs"
//             />
//             <button className="text-white bg-[#F36F21] font-semibold py-3 px-6 rounded-r-md ">
//               Send
//             </button>
//           </div>
//           {/* start comdown */}
//           <div className="flex justify-center mt-10">
//             <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
//               <div className=" flex flex-col bg-blue-600 p-2 rounded-box text-white">
//                 <span className="countdown font-mono text-5xl">
//                   <span style={{ "--value": days }}></span>
//                 </span>
//                 days
//               </div>
//               <div className="flex flex-col p-2 bg-[#F36F21] rounded-box text-white">
//                 <span className="countdown font-mono text-5xl">
//                   <span style={{ "--value": hours }}></span>
//                 </span>
//                 hours
//               </div>
//               <div className="flex flex-col p-2 bg-sky-500 rounded-box text-white">
//                 <span className="countdown font-mono text-5xl">
//                   <span style={{ "--value": minutes }}></span>
//                 </span>
//                 min
//               </div>
//               <div className="flex flex-col p-2 bg-slate-600 rounded-box text-white">
//                 <span className="countdown font-mono text-5xl">
//                   <span style={{ "--value": seconds }}> {seconds}</span>
//                 </span>
//                 sec
//               </div>
//             </div>
//           </div>
//           {/* <imageSlider/> */}
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import fashionVideo from "../assets/ramdan-video.mp4"; // Import the video file

export default function Home() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const x = setInterval(function () {
      const countDownDate = new Date("February 25, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(x);
        return;
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(x);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={fashionVideo} // Local Video
        autoPlay
        loop
        muted
      ></video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black/40">
        <h1 className="text-3xl sm:text-5xl uppercase font-bold text-[#F36F21] mb-5">
          Bangladeshinterior.com
        </h1>

        <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
        <b>BangladeshInterior.com</b> offers the best architectural solutions in Dhaka, Bangladesh.
        </p>

        {/* Email Input */}
        <div className="mt-12 flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-white input input-bordered rounded-r-none w-full max-w-xs"
          />
          <button className="text-white bg-[#F36F21] font-semibold py-3 px-6 rounded-r-md">
            Send
          </button>
        </div>

        {/* Countdown Timer */}
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
      </div>
    </div>
  );
}
