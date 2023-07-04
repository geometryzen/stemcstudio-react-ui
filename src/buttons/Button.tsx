import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
/*
interface ButtonProps {
    style?: CSSProperties,
    children?: ReactNode
}
*/

export const Button = forwardRef<
    HTMLButtonElement,
    ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
    return (
        <button ref={ref} type="button" {...props}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';
