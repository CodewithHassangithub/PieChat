export const measurePerformance = (componentName) => {
  if (process.env.NODE_ENV === 'development') {
    performance.mark(`${componentName}-start`);
    return () => {
      performance.mark(`${componentName}-end`);
      performance.measure(
        `${componentName} Render Time`,
        `${componentName}-start`,
        `${componentName}-end`
      );
    };
  }
  return () => {};
}; 