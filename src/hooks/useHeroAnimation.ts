import { useEffect, useRef } from 'react';

const getRandomColor = () => {
  const colors = ['#2BBAA6', '#3A7BD5', '#F86635', '#8B5CF6', '#EC4899', '#10B981'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const useHeroAnimation = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const scrollPrompt = scrollRef.current;

    if (heading && paragraph) {
      // Apply gradient to heading
      heading.style.background = 'linear-gradient(90deg, #2BBAA6, #3A7BD5, #F86635)';
      heading.style.webkitBackgroundClip = 'text';
      heading.style.backgroundClip = 'text';
      heading.style.color = 'transparent';

      // Apply random colors to paragraph words
      const paragraphText = paragraph.textContent || '';
      paragraph.innerHTML = paragraphText
        .split(' ')
        .map(word => `<span style="color: ${getRandomColor()}">${word}</span>`)
        .join(' ');

      // Initial animation setup
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(30px)';
      paragraph.style.opacity = '0';
      paragraph.style.transform = 'translateY(30px)';
      if (scrollPrompt) scrollPrompt.style.opacity = '0';

      // Force reflow
      void heading.offsetWidth;
      void paragraph.offsetWidth;

      // Animate in sequence
      requestAnimationFrame(() => {
        heading.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';

        paragraph.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateY(0)';

        if (scrollPrompt) {
          scrollPrompt.style.transition = 'opacity 0.8s ease-out 0.6s, transform 0.3s ease';
          scrollPrompt.style.opacity = '1';
        }
      });
    }
  }, []);

  return { headingRef, paragraphRef, scrollRef };
};