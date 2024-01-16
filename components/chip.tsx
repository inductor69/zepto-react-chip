import React from 'react'
import { CancelIcon } from './icons'

type ChipProps = {
    children?: React.ReactNode;
    onDelete?: () => void;
    className?: string;
}

const Chip = ({ children, onDelete, className }: ChipProps) => {
    return (
        <div
            className={`border rounded-full w-fit pl-2 pr-1 py-1 flex gap-2 items-center justify-center text-sm text-slate-800 ${className}`}>
            {children}
            <button onClick={onDelete}>
                <CancelIcon />
            </button>
        </div>
    );
}

export default Chip
