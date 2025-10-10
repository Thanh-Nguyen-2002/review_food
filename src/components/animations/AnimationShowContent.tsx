import { AnimatePresence, motion } from "framer-motion";
import React from "react";
interface Props {
    isOpen  : boolean,
    content : string
}
export default function AnimationShowContent({isOpen, content} : Props) {
    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-gray-600 text-sm mt-3"
                    >
                        <p>{content}</p>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
