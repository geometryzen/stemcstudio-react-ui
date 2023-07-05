import * as React from 'react';
import { CSSProperties, FunctionComponent, ReactNode } from 'react';
import styles from './Toggle.module.css';

export interface ToggleProps {
    label: string;
    style?: CSSProperties;
    children?: ReactNode;
}

export const Toggle: FunctionComponent<ToggleProps> = ({ label }) => {
    const id = `toggle-${Math.random()}`;
    return (
        <label className={styles.toggle} htmlFor={id}>
            <span className={styles.toggle__label}>{label}</span>
            <input
                type="checkbox"
                role="switch"
                className={styles.toggle__element}
                id={id}
            />
            <div className={styles.toggle__decor} aria-hidden="true">
                <div className={styles.toggle__thumb}></div>
            </div>
        </label>
    );
};
