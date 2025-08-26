"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gift, X } from 'lucide-react';

const EventPopup = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent className="p-0 border-none max-w-md overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "backOut" }}
            >
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"></div>
                <div className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white">
                    <Gift size={32} />
                  </div>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold font-['Cinzel'] text-gray-800">
                      <span className="dance-ornament">Special Offer!</span>
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 text-lg mt-2">
                      Join our upcoming Summer Workshop and get a <strong>15% discount</strong> on your first month's fees!
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <p className="text-gray-700">
                      Experience an immersive journey into Bharatanatyam this summer. Limited spots available!
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link href="/book-class" onClick={() => onOpenChange(false)}>
                      <Button size="lg" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full pulse-glow">
                        Claim Your Discount Now!
                      </Button>
                    </Link>
                  </div>
                </div>
                <button
                  onClick={() => onOpenChange(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default EventPopup;
