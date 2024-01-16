import React from 'react'

type Props = {}
export const CancelIcon = (props: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="icon icon-tabler icon-tabler-circle-x-filled"
            viewBox="0 0 24 24"
        >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path
                fill="currentColor"
                strokeWidth="0"
                d="M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-6.489 5.8a1 1 0 00-1.218 1.567L10.585 12l-1.292 1.293-.083.094a1 1 0 001.497 1.32L12 13.415l1.293 1.292.094.083a1 1 0 001.32-1.497L13.415 12l1.292-1.293.083-.094a1 1 0 00-1.497-1.32L12 10.585l-1.293-1.292-.094-.083z"
            ></path>
        </svg>
    );
}
