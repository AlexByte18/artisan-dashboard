

import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';

type Variant = 'primary' | 'secondary';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  className?: string;
  // icon?: keyof typeof Ionicons.glyphMap; 
}


const ThemedTextInput = ({ variant = 'primary', className, ...rest }: Props) => {

  const baseClasses = 'border border-gray-300 p-3 rounded bg-white flex flex-row items-center gap-2';
  const variantClasses = {
    primary: "bg-blue-300",
    secondary: "",
  }[variant];

  const primaryColor = '#4F46E5'; // Indigo-600
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses,
        className
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {/* {
        icon && (
          <Ionicons
            name={icon}
            size={20}
            color={textColor}
            className=''
          />
        )
      } */}

      <input
      className='flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'
        ref={inputRef}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        {...rest}
        style={{
          borderColor: isActive ? primaryColor : '#ccc',
        }}
      />
    </div>
  )
}

export default ThemedTextInput;