// import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

// const ANIMATION_CONFIG = {
//   SMOOTH_TAU: 0.25,
//   MIN_COPIES: 2,
//   COPY_HEADROOM: 2
// };

// const toCssLength = value => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

// const cx = (...parts) => parts.filter(Boolean).join(' ');

// const useResizeObserver = (callback, elements, dependencies) => {
//   useEffect(() => {
//     if (!window.ResizeObserver) {
//       const handleResize = () => callback();
//       window.addEventListener('resize', handleResize);
//       callback();
//       return () => window.removeEventListener('resize', handleResize);
//     }

//     const observers = elements.map(ref => {
//       if (!ref.current) return null;
//       const observer = new ResizeObserver(callback);
//       observer.observe(ref.current);
//       return observer;
//     });

//     callback();

//     return () => {
//       observers.forEach(observer => observer?.disconnect());
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, dependencies);
// };

// const useImageLoader = (seqRef, onLoad, dependencies) => {
//   useEffect(() => {
//     const images = seqRef.current?.querySelectorAll('img') ?? [];

//     if (images.length === 0) {
//       onLoad();
//       return;
//     }

//     let remainingImages = images.length;
//     const handleImageLoad = () => {
//       remainingImages -= 1;
//       if (remainingImages === 0) {
//         onLoad();
//       }
//     };

//     images.forEach(img => {
//       const htmlImg = img;
//       if (htmlImg.complete) {
//         handleImageLoad();
//       } else {
//         htmlImg.addEventListener('load', handleImageLoad, { once: true });
//         htmlImg.addEventListener('error', handleImageLoad, { once: true });
//       }
//     });

//     return () => {
//       images.forEach(img => {
//         img.removeEventListener('load', handleImageLoad);
//         img.removeEventListener('error', handleImageLoad);
//       });
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, dependencies);
// };

// const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
//   const rafRef = useRef(null);
//   const lastTimestampRef = useRef(null);
//   const offsetRef = useRef(0);
//   const velocityRef = useRef(0);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const prefersReduced =
//       typeof window !== 'undefined' &&
//       window.matchMedia &&
//       window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//     if (seqWidth > 0) {
//       offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
//       track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
//     }

//     if (prefersReduced) {
//       track.style.transform = 'translate3d(0, 0, 0)';
//       return () => {
//         lastTimestampRef.current = null;
//       };
//     }

//     const animate = timestamp => {
//       if (lastTimestampRef.current === null) {
//         lastTimestampRef.current = timestamp;
//       }

//       const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
//       lastTimestampRef.current = timestamp;

//       const target = pauseOnHover && isHovered ? 0 : targetVelocity;

//       const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
//       velocityRef.current += (target - velocityRef.current) * easingFactor;

//       if (seqWidth > 0) {
//         let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
//         nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
//         offsetRef.current = nextOffset;

//         const translateX = -offsetRef.current;
//         track.style.transform = `translate3d(${translateX}px, 0, 0)`;
//       }

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (rafRef.current !== null) {
//         cancelAnimationFrame(rafRef.current);
//         rafRef.current = null;
//       }
//       lastTimestampRef.current = null;
//     };
//   }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
// };

// export const LogoLoop = memo(
//   ({
//     logos,
//     speed = 120,
//     direction = 'left',
//     width = '100%',
//     logoHeight = 28,
//     gap = 32,
//     pauseOnHover = true,
//     fadeOut = false,
//     fadeOutColor,
//     scaleOnHover = false,
//     ariaLabel = 'Partner logos',
//     className,
//     style
//   }) => {
//     const containerRef = useRef(null);
//     const trackRef = useRef(null);
//     const seqRef = useRef(null);

//     const [seqWidth, setSeqWidth] = useState(0);
//     const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
//     const [isHovered, setIsHovered] = useState(false);

//     const targetVelocity = useMemo(() => {
//       const magnitude = Math.abs(speed);
//       const directionMultiplier = direction === 'left' ? 1 : -1;
//       const speedMultiplier = speed < 0 ? -1 : 1;
//       return magnitude * directionMultiplier * speedMultiplier;
//     }, [speed, direction]);

//     const updateDimensions = useCallback(() => {
//       const containerWidth = containerRef.current?.clientWidth ?? 0;
//       const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

//       if (sequenceWidth > 0) {
//         setSeqWidth(Math.ceil(sequenceWidth));
//         const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
//         setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
//       }
//     }, []);

//     useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);

//     useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);

//     useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

//     const cssVariables = useMemo(
//       () => ({
//         '--logoloop-gap': `${gap}px`,
//         '--logoloop-logoHeight': `${logoHeight}px`,
//         ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
//       }),
//       [gap, logoHeight, fadeOutColor]
//     );

//     const rootClasses = useMemo(
//       () =>
//         cx(
//           'relative overflow-x-hidden group',
//           '[--logoloop-gap:32px]',
//           '[--logoloop-logoHeight:28px]',
//           '[--logoloop-fadeColorAuto:#ffffff]',
//           'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
//           scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
//           className
//         ),
//       [scaleOnHover, className]
//     );

//     const handleMouseEnter = useCallback(() => {
//       if (pauseOnHover) setIsHovered(true);
//     }, [pauseOnHover]);

//     const handleMouseLeave = useCallback(() => {
//       if (pauseOnHover) setIsHovered(false);
//     }, [pauseOnHover]);

//     const renderLogoItem = useCallback(
//       (item, key) => {
//         const isNodeItem = 'node' in item;

//         const content = isNodeItem ? (
//           <span
//             className={cx(
//               'inline-flex items-center',
//               'motion-reduce:transition-none',
//               scaleOnHover &&
//                 'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
//             )}
//             aria-hidden={!!item.href && !item.ariaLabel}
//           >
//             {item.node}
//           </span>
//         ) : (
//           <img
//             className={cx(
//               'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
//               '[-webkit-user-drag:none] pointer-events-none',
//               '[image-rendering:-webkit-optimize-contrast]',
//               'motion-reduce:transition-none',
//               scaleOnHover &&
//                 'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
//             )}
//             src={item.src}
//             srcSet={item.srcSet}
//             sizes={item.sizes}
//             width={item.width}
//             height={item.height}
//             alt={item.alt ?? ''}
//             title={item.title}
//             loading="lazy"
//             decoding="async"
//             draggable={false}
//           />
//         );

//         const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);

//         const inner = item.href ? (
//           <a
//             className={cx(
//               'inline-flex items-center no-underline rounded',
//               'transition-opacity duration-200 ease-linear',
//               'hover:opacity-80',
//               'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
//             )}
//             href={item.href}
//             aria-label={itemAriaLabel || 'logo link'}
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             {content}
//           </a>
//         ) : (
//           content
//         );

//         return (
//           <li
//             className={cx(
//               'flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]',
//               scaleOnHover && 'overflow-visible group/item'
//             )}
//             key={key}
//             role="listitem"
//           >
//             {inner}
//           </li>
//         );
//       },
//       [scaleOnHover]
//     );

//     const logoLists = useMemo(
//       () =>
//         Array.from({ length: copyCount }, (_, copyIndex) => (
//           <ul
//             className="flex items-center"
//             key={`copy-${copyIndex}`}
//             role="list"
//             aria-hidden={copyIndex > 0}
//             ref={copyIndex === 0 ? seqRef : undefined}
//           >
//             {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
//           </ul>
//         )),
//       [copyCount, logos, renderLogoItem]
//     );

//     const containerStyle = useMemo(
//       () => ({
//         width: toCssLength(width) ?? '100%',
//         ...cssVariables,
//         ...style
//       }),
//       [width, cssVariables, style]
//     );

//     return (
//       <div
//         ref={containerRef}
//         className={rootClasses}
//         style={containerStyle}
//         role="region"
//         aria-label={ariaLabel}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {fadeOut && (
//           <>
//             <div
//               aria-hidden
//               className={cx(
//                 'pointer-events-none absolute inset-y-0 left-0 z-[1]',
//                 'w-[clamp(24px,8%,120px)]',
//                 'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
//               )}
//             />
//             <div
//               aria-hidden
//               className={cx(
//                 'pointer-events-none absolute inset-y-0 right-0 z-[1]',
//                 'w-[clamp(24px,8%,120px)]',
//                 'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
//               )}
//             />
//           </>
//         )}

//         <div
//           className={cx('flex w-max will-change-transform select-none', 'motion-reduce:transform-none')}
//           ref={trackRef}
//         >
//           {logoLists}
//         </div>
//       </div>
//     );
//   }
// );

// LogoLoop.displayName = 'LogoLoop';

// export default LogoLoop;
import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

// Configuration for the animation behavior
const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25, // Time constant for velocity smoothing (lower = snappier)
  MIN_COPIES: 2, // Minimum number of logo sequence copies
  COPY_HEADROOM: 2 // Extra copies to prevent visual gaps during resize/scroll
};

// Helper function to convert a value to a CSS length string (e.g., 32 -> '32px')
const toCssLength = value => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

// Helper for combining class names
const cx = (...parts) => parts.filter(Boolean).join(' ');

/**
 * Custom hook to observe element dimensions using ResizeObserver (or window resize fallback).
 * @param {Function} callback - Function to execute on resize.
 * @param {Array<Object>} elements - Array of refs to observe.
 * @param {Array} dependencies - Dependencies for useEffect.
 */
const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    // Fallback for environments without ResizeObserver
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    // Use ResizeObserver for better performance
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

/**
 * Custom hook to wait for all images inside a sequence ref to load before calling onLoad.
 * @param {Object} seqRef - Ref to the sequence container.
 * @param {Function} onLoad - Callback once all images are loaded.
 * @param {Array} dependencies - Dependencies for useEffect.
 */
const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
      const htmlImg = img;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

/**
 * Custom hook managing the high-performance animation loop using requestAnimationFrame.
 * It handles smooth velocity changes and loop resetting.
 * @param {Object} trackRef - Ref to the element being translated.
 * @param {number} targetVelocity - Desired scrolling speed (px/s).
 * @param {number} seqWidth - Width of the repeating sequence in pixels.
 * @param {boolean} isHovered - True if the component is being hovered over.
 * @param {boolean} pauseOnHover - Should animation pause on hover.
 */
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Check for reduced motion preference
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize/reset position after width changes
    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    // Respect reduced motion preference
    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = timestamp => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;

      // Smooth velocity easing using exponential decay
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        
        // Loop offset: keep it within [0, seqWidth)
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        // Apply 3D transform for hardware acceleration
        const translateX = -offsetRef.current;
        track.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

export const LogoLoop = memo(
  ({
    logos, // Array of logo data objects
    speed = 120, // Base speed in pixels per second
    direction = 'left', // 'left' or 'right'
    width = '100%',
    logoHeight = 28, // Height of logo/node content
    gap = 32, // Gap between logo items in pixels
    pauseOnHover = true,
    fadeOut = true, // Added fadeOut default to true for modern look
    fadeOutColor,
    scaleOnHover = true, // Added scaleOnHover default to true for interactivity
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    // Calculate the target velocity based on speed and direction
    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    // Function to calculate dimensions and copies needed
    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      // Get the true width of the first logo sequence (ul element)
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        // Calculate copies needed to always fill the container + headroom
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    // Hooks for controlling updates and animation
    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    // Dynamic CSS variables for styling
    const cssVariables = useMemo(
      () => ({
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
      }),
      [gap, logoHeight, fadeOutColor]
    );

    // Root element classes
    const rootClasses = useMemo(
      () =>
        cx(
          // Base styles for the container
          'relative overflow-x-hidden group bg-gray-950', // Added bg-gray-950 for dark theme
          // Default CSS variable values
          '[--logoloop-gap:32px]',
          '[--logoloop-logoHeight:28px]',
          // Auto fade colors based on theme context (assuming Tailwind dark mode support)
          '[--logoloop-fadeColorAuto:#000000]', // Changed default fade color to black for consistency
          'dark:[--logoloop-fadeColorAuto:#0b0b0b]', // Fallback for dark themes
          // Add padding only if scaling is enabled to prevent clipping
          scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
          className
        ),
      [scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) setIsHovered(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) setIsHovered(false);
    }, [pauseOnHover]);

    const renderLogoItem = useCallback(
      (item, key) => {
        const isNodeItem = 'node' in item;

        // Content wrapper for node or img
        const content = isNodeItem ? (
          <span
            className={cx(
              'inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300', // Styling for text nodes
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            aria-hidden={!!item.href && !item.ariaLabel}
          >
            {item.node}
          </span>
        ) : (
          <img
            className={cx(
              'h-[var(--logoloop-logoHeight)] w-auto block object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-300', // Styling for images (grayscale, opacity)
              '[-webkit-user-drag:none] pointer-events-none',
              '[image-rendering:-webkit-optimize-contrast]',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            src={item.src}
            srcSet={item.srcSet}
            sizes={item.sizes}
            width={item.width}
            height={item.height}
            alt={item.alt ?? ''}
            title={item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );

        const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);

        // Link wrapper
        const inner = item.href ? (
          <a
            className={cx(
              'inline-flex items-center no-underline rounded',
              'transition-opacity duration-200 ease-linear',
              'hover:opacity-80',
              'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
            )}
            href={item.href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            className={cx(
              'flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]',
              'flex items-center justify-center', // Ensure content is centered vertically
              scaleOnHover && 'overflow-visible group/item'
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [scaleOnHover]
    );
    
    // --- Mock Logos for Demonstration ---
    const mockLogos = [
        { node: <span className="font-semibold text-2xl">Client A</span>, title: "Client A" },
        { node: <span className="font-light text-xl">Design.io</span>, title: "Design.io" },
        { node: <span className="text-lg">Project X</span>, title: "Project X" },
        { node: <span className="font-thin text-xl">Studio Y</span>, title: "Studio Y" },
        { node: <span className="font-semibold text-2xl">Client B</span>, title: "Client B" },
    ]
    // Use the provided 'logos' prop if available, otherwise use mock data
    const finalLogos = logos && logos.length > 0 ? logos : mockLogos;

    // Container styles
    const containerStyle = useMemo(
      () => ({
        width: toCssLength(width) ?? '100%',
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style]
    );

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Fade Out Overlays */}
        {fadeOut && (
          <>
            <div
              aria-hidden
              className={cx(
                'pointer-events-none absolute inset-y-0 left-0 z-[1]',
                'w-[clamp(24px,8%,120px)]',
                // Fade from the fade color (black/dark theme) to transparent
                'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
              )}
            />
            <div
              aria-hidden
              className={cx(
                'pointer-events-none absolute inset-y-0 right-0 z-[1]',
                'w-[clamp(24px,8%,120px)]',
                // Fade from transparent to the fade color
                'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
              )}
            />
          </>
        )}

        {/* Animation Track */}
        <div
          className={cx('flex w-max will-change-transform select-none', 'motion-reduce:transform-none')}
          ref={trackRef}
        >
          {/* Render copies using finalLogos */}
          {Array.from({ length: copyCount }, (_, copyIndex) => (
             <ul
                className="flex items-center"
                key={`copy-${copyIndex}`}
                role="list"
                aria-hidden={copyIndex > 0} 
                ref={copyIndex === 0 ? seqRef : undefined} 
             >
                {/* FIX: Use finalLogos, which is guaranteed to be an array, instead of the prop 'logos' */}
                {finalLogos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
             </ul>
          ))}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
