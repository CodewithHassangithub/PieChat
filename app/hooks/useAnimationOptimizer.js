import { useCallback, useMemo } from 'react';

export function useAnimationOptimizer() {
  const animationVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }), []);

  const handleAnimationComplete = useCallback(() => {
    // Cleanup logic here
  }, []);

  return { animationVariants, handleAnimationComplete };
} 