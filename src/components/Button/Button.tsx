import React, { FC, useState } from "react";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = () => {
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(count + 1);
    };

    return (
        <button onClick={clickHandler}>Clicked {count} times</button>
    );
};
