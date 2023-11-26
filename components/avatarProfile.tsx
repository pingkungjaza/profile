'use client';
import { Avatar } from '@nextui-org/react'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const avatarProfile = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 0.25 }}
        whileHover={{ scale: 1.1 }}
      >
        <Avatar
          isBordered
          as="button"
          className="transition-transform mr-2"
          color="secondary"
          name="Wittawat Phumthong"
          size="sm"
          src="/images/logo.png"
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default avatarProfile