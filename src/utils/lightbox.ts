export const initGLightbox = async () => {
  if (typeof window !== 'undefined') {
    try {
      const GLightbox = (await import('glightbox')).default;
      const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
      return lightbox;
    } catch (error) {
      console.error('Failed to initialize GLightbox:', error);
    }
  }
}; 