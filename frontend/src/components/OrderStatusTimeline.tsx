'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = ['pending', 'processing', 'delivered'];

export default function OrderStatusTimeline({ status }: { status: string }) {
  const currentIndex = steps.indexOf(status);

  return (
    <div className="flex space-x-4">
      {steps.map((step, index) => {
        const active = index <= currentIndex;
        return (
          <motion.div
            key={step}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle className={active ? 'text-green-500' : 'text-gray-300'} />
            <span className={active ? 'text-green-600' : 'text-gray-500'}>{step}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
