import { useEffect } from 'react';
import { initGLightbox } from '@/utils/lightbox';

export const useLightbox = () => {
  useEffect(() => {
    const initLightbox = async () => {
      await initGLightbox();
    };
    initLightbox();
  }, []);
}; 