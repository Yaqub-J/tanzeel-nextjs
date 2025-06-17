export const fadeIn = (element: HTMLElement, duration: number = 300) => {
  element.style.opacity = '0';
  element.style.display = 'block';

  let start: number | null = null;
  const animate = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.min(progress / duration, 1);
    element.style.opacity = opacity.toString();

    if (progress < duration) {
      window.requestAnimationFrame(animate);
    }
  };

  window.requestAnimationFrame(animate);
};

export const fadeOut = (element: HTMLElement, duration: number = 300) => {
  let start: number | null = null;
  const animate = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.max(1 - progress / duration, 0);
    element.style.opacity = opacity.toString();

    if (progress < duration) {
      window.requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
    }
  };

  window.requestAnimationFrame(animate);
};

export const slideIn = (element: HTMLElement, direction: 'left' | 'right' | 'up' | 'down' = 'left', duration: number = 300) => {
  const startPosition = {
    left: '-100%',
    right: '100%',
    up: '-100%',
    down: '100%'
  }[direction];

  element.style.transform = `translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(${startPosition})`;
  element.style.display = 'block';

  let start: number | null = null;
  const animate = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const translate = Math.min(progress / duration, 1) * 100;
    element.style.transform = `translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(${direction === 'left' || direction === 'up' ? translate - 100 : 100 - translate}%)`;

    if (progress < duration) {
      window.requestAnimationFrame(animate);
    }
  };

  window.requestAnimationFrame(animate);
};

export const slideOut = (element: HTMLElement, direction: 'left' | 'right' | 'up' | 'down' = 'left', duration: number = 300) => {
  let start: number | null = null;
  const animate = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const translate = Math.min(progress / duration, 1) * 100;
    element.style.transform = `translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(${direction === 'left' || direction === 'up' ? -translate : translate}%)`;

    if (progress < duration) {
      window.requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
    }
  };

  window.requestAnimationFrame(animate);
}; 