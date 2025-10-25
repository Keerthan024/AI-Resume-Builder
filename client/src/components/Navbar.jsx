import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  LogOutIcon,
  UserIcon,
  SettingsIcon,
  FileTextIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
  HomeIcon,
  UserCircleIcon,
} from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    {
      icon: <FileTextIcon className="w-4 h-4" />,
      label: "Dashboard",
      path: "/app",
    },
    {
      icon: <HomeIcon className="w-4 h-4" />,
      label: "Home",
      path: "/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm shadow-slate-200/20"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-0"
            >
              <img
                src="/favicon.svg"
                alt="Logo"
                className="h-10 w-auto md:h-8 lg:h-14"
              />
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-5 w-auto md:h-8 lg:h-10"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Welcome Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <UserCircleIcon className="w-4 h-4 text-white" />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-700">
                  Welcome back
                </p>
                <p className="text-sm text-slate-500 font-semibold">
                  {user?.name}
                </p>
              </div>
            </motion.div>

            {/* User Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-white/50 hover:bg-white/80 border border-slate-200/60 rounded-xl px-4 py-2.5 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                </div>
                <ChevronDownIcon
                  className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-500/20 border border-slate-200/60 overflow-hidden"
                  >
                    {/* User Info */}
                    <div className="p-4 border-b border-slate-200/40">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-lg font-semibold text-white">
                            {user?.name?.charAt(0)?.toUpperCase() || "U"}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-slate-800 truncate">
                            {user?.name}
                          </p>
                          <p className="text-sm text-slate-500 truncate">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 w-full px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                          >
                            <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                              {item.icon}
                            </div>
                            <span className="font-medium text-sm">
                              {item.label}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Logout Button */}
                    <div className="p-2 border-t border-slate-200/40">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={logoutUser}
                        className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group"
                      >
                        <LogOutIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-sm">Sign Out</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <MenuIcon className="w-6 h-6 text-slate-700" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-slate-200/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="p-6 border-b border-slate-200/40">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <FileTextIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-slate-800">
                        Dashboard
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    <XIcon className="w-5 h-5 text-slate-700" />
                  </motion.button>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-200/40">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-lg font-semibold text-white">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 truncate">
                      {user?.name}
                    </p>
                    <p className="text-sm text-slate-500 truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-4"
              >
                {menuItems.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 w-full px-4 py-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group mb-2"
                    >
                      <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-medium text-[15px]">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Logout Button */}
                <motion.button
                  variants={itemVariants}
                  onClick={logoutUser}
                  className="flex items-center gap-4 w-full px-4 py-4 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group mt-4 border-t border-slate-200/40 pt-4"
                >
                  <LogOutIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-[15px]">Sign Out</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop Click to Close Dropdown */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
