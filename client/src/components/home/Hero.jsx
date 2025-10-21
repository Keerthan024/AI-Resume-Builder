import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  useEffect(() => {
    // Any initialization logic can go here
  }, []);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="min-h-screen pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Navbar */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-50 flex items-center justify-between w-full py-6 px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0"
        >
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                ResumeCraft
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-700">
            {["Home", "Features", "Templates", "Testimonials", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition-colors font-medium relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              )
            )}
          </div>

          <div className="flex gap-3">
            {!user ? (
              <>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link
                    to="/app?state=register"
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 active:scale-95 transition-all duration-300 rounded-xl text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                  >
                    Get Started Free
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Link
                    to="/app?state=login"
                    className="px-6 py-2.5 border border-slate-300 hover:border-blue-400 active:scale-95 hover:bg-white transition-all duration-300 rounded-xl text-slate-700 hover:text-slate-900 font-medium backdrop-blur-sm"
                  >
                    Sign In
                  </Link>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to="/app"
                  className="px-8 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 active:scale-95 transition-all duration-300 rounded-xl text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  Go to Dashboard
                </Link>
              </motion.div>
            )}
          </div>

          <motion.button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition p-2 rounded-lg bg-slate-100 hover:bg-blue-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu text-slate-700"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </motion.button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-lg gap-8 md:hidden"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 mx-4 flex flex-col items-center gap-6 shadow-2xl border border-blue-100"
              >
                {[
                  "Home",
                  "Features",
                  "Templates",
                  "Testimonials",
                  "Contact",
                ].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-800 hover:text-blue-600 font-medium text-xl transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 p-3 bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black pt-12"
        >
          {/* Floating Elements */}
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute top-20 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-60 blur-sm"
          />
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            transition={{ delay: 0.5 }}
            className="absolute top-40 right-20 w-4 h-4 bg-indigo-400 rounded-full opacity-40 blur-sm"
          />
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-40 left-20 w-5 h-5 bg-sky-400 rounded-full opacity-50 blur-sm"
          />

          {/* Avatars + Stars */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center mt-16 mb-8 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-blue-100"
          >
            <div className="flex -space-x-3 pr-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.img
                  key={i}
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1438761681033-6461ffad8d80"
                      : i === 2
                      ? "1633332755192-727a05c4013d"
                      : i === 3
                      ? "1535713875002-d1d0cf377fde"
                      : i === 4
                      ? "1438761681033-6461ffad8d80"
                      : "1535713875002-d1d0cf377fde"
                  }?q=80&w=200`}
                  alt={`user${i}`}
                  className="size-10 object-cover rounded-full border-3 border-white shadow-lg hover:-translate-y-1 transition-transform duration-300"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>

            <div>
              <div className="flex mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="lucide lucide-star text-transparent fill-amber-400 mr-0.5"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </motion.svg>
                  ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-sm text-slate-600 font-medium"
              >
                Trusted by 10,000+ professionals worldwide
              </motion.p>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold max-w-6xl text-center mt-6 md:leading-[80px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-transparent"
          >
            Create Professional Resumes with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              AI Power
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-center text-lg text-slate-600 my-8 leading-relaxed"
          >
            Build ATS-optimized, professional resumes that get you hired faster.
            Our AI analyzes job descriptions and highlights your strengths to
            match employer needs perfectly.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 my-8"
          >
            {[
              { number: "95%", label: "Interview Rate" },
              { number: "2.3x", label: "More Interviews" },
              { number: "50+", label: "Templates" },
              { number: "30s", label: "Build Time" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mt-6 flex-wrap justify-center"
          >
            <Link to="/app">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl px-10 py-4 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/40 flex items-center gap-3 font-semibold text-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="lucide lucide-sparkles"
                >
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
                Build Your Resume Free
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 border-2 border-slate-300 hover:border-blue-400 hover:bg-white transition-all duration-300 rounded-xl px-8 py-4 text-slate-700 hover:text-slate-900 font-semibold backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide lucide-play-circle text-blue-500"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Trusted By Section */}
          <motion.div variants={fadeInUp} className="mt-20 text-center">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-8">
              Trusted by professionals at
            </p>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto py-6 px-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {logos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt="company logo"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

        * {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Hero;
