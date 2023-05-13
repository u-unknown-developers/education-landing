import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function SlideLeft({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className='relative overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,

          ease: 'easeIn',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default SlideLeft;
