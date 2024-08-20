import React, { forwardRef, CSSProperties } from 'react';

export interface IconWrapperProps extends Partial<React.SVGProps<SVGSVGElement>> {
  /** The color of the svg icon */
  color?: string;

  /** StrokeWidth of the svg icon
   * @default 1.5
   */
  strokeWidth?: number;

  /** The size of the svg icon 
   * @default 24
   */
  size?: number | string;

  /**
   * The type of the icon
   * @default "outline"
   */
  set?: 'bold' | 'broken' | 'bulk' | 'linear' | 'outline' | 'twoTone'

  /** Css styles applied to the svg icon */
  style?: CSSProperties;
}



/**
 * Function createPerkIcon is a component that wraps an SVG icon component with additional props 
 * for customization, such as `color`, `strokeWidth`, `size`, and `style`.
 *
 * @template T - The type of the props for the icon component being wrapped.
 *
 * @param {React.ComponentType<T>} Component - The icon component to be wrapped.
 * 
 * @returns {React.ForwardRefExoticComponent<IconWrapperProps & React.RefAttributes<SVGSVGElement>>} 
 * - A forward-ref component that renders the wrapped icon component inside an SVG element.
 *
 * @example
 * // Usage example
 * const MyIcon = createIcon(SomeSvgComponent);
 * 
 * <Air color="red" strokeWidth="2" size="32" set="outline"/>
 */
const createPerkIcon = <T,>(Component: React.ComponentType<T>) => {
  const IconWrapper = forwardRef<SVGSVGElement, IconWrapperProps>(
    ({ color, strokeWidth = "1.5", size = '24', set = 'outline', style, ...props }, ref) => {

      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="none"
          viewBox="0 0 24 24"
          style={style}
          {...props}
          ref={ref}
        >
          <Component {...(props as T)} color={color} strokeWidth={strokeWidth} set={set} />
        </svg>
      );
    }
  );

  return IconWrapper;
};


export default createPerkIcon;
