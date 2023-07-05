import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './Button.module.css';

export const Button = forwardRef<
    HTMLButtonElement,
    ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
    return (
        <button className={styles.button} ref={ref} type="button" {...props}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';
