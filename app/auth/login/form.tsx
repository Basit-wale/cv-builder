"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LoginField, SignUpField } from "./login";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["500", "600"] });

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className={`flex h-screen bg-gray-100 ${inter.className}`}>
      <div className="justify-center items-center flex box-border w-1/2">
        <div className=" h-fit w-[85%] overflow-hidden content-center">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex flex-col gap-4 items-center p-8 px-20"
              >
                <LoginField />
                <p className="text-sm">
                  Don&apos;t have an account?{" "}
                  <span
                    className="text-[#1c93ad] cursor-pointer"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign up
                  </span>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex flex-col gap-4 items-center p-8 px-20"
              >
                <SignUpField />

                <p className="text-sm">
                  Already have an account?{" "}
                  <span
                    className="text-[#1c93ad] cursor-pointer"
                    onClick={() => setIsLogin(true)}
                  >
                    Log in
                  </span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="bg-emerald-950 w-1/2"></div>
    </div>
  );
}
