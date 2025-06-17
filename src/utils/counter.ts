export const initPureCounter = async () => {
  if (typeof window !== 'undefined') {
    try {
      const PureCounter = (await import('@srexi/purecounterjs')).default;
      new PureCounter({
        // Config options
        selector: '.purecounter',
        start: 0,
        end: 100,
        duration: 2,
        delay: 10,
        once: true,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        separator: false
      });
    } catch (error) {
      console.error('Failed to initialize PureCounter:', error);
    }
  }
}; 