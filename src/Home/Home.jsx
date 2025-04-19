"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons"
import { Button } from "antd"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        {mounted && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1],
                x: [0, -20, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
          </>
        )}

        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
            <span className="text-amber-400">Bangladesh</span> Interior
          </h1>
          <p className="text-xl text-gray-300">Crafting Exceptional Spaces</p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Coming Soon</h2>
          <p className="max-w-md mx-auto text-gray-300 mb-8">
            We're crafting a new experience for you. Our website is under construction, but we're still available for
            your interior design needs.
          </p>

          <CountdownTimer />
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="tel:+8801871366728">
            <Button
              type="primary"
              className="!rounded-full !bg-amber-500 hover:!bg-amber-600 !text-black px-6 py-3 text-base flex items-center gap-2"
              icon={<PhoneOutlined />}
            >
              Contact Us Now
            </Button>
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950/80 backdrop-blur-sm py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Bangladesh Interior</h3>
              <p className="text-gray-400 max-w-md">
                Transforming spaces with innovative design solutions. We specialize in residential and commercial
                interior design across Bangladesh.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <PhoneOutlined className="text-amber-500 mr-3" />
                  <a href="tel:+8801871366728" className="hover:text-white transition-colors">
                    +880 1871 366 728
                  </a>
                </li>
                <li className="flex items-center">
                  <MailOutlined className="text-amber-500 mr-3" />
                  <a href="mailto:info@bangladeshinterior.com" className="hover:text-white transition-colors">
                    info@bangladeshinterior.com
                  </a>
                </li>
                <li className="flex items-start">
                  <EnvironmentOutlined className="text-amber-500 mr-3 mt-1" />
                  <span>Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-center">
                  <ClockCircleOutlined className="text-amber-500 mr-3" />
                  <span>Open: 10:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Bangladesh Interior. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Countdown Timer
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center gap-4 sm:gap-6 mb-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

// Time Unit
function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-lg bg-gray-800/80 backdrop-blur-sm text-2xl sm:text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-xs sm:text-sm text-gray-400">{label}</span>
    </div>
  )
}
