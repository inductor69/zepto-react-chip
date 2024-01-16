
"use client"
import React, { useState, useRef, useEffect } from 'react';
import Chip from './chip';
import SUGGESTIONS from '@/data/suggestions';

type ChipInputProps = {}; // Define props type, even if it's empty for now.

const ChipInput: React.FC<ChipInputProps> = () => {
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>(SUGGESTIONS);
    const [curSuggestions, setCurSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [isLastChipHighlighted, setIsLastChipHighlighted] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setCurSuggestions(
            suggestions.filter(val =>
                val.toLowerCase().includes(input.toLowerCase())
            )
        );
    }, [input, suggestions]);

    const deleteFromSelectedChips = (index: number) => {
        const chipToDelete = selectedChips[index];
        setSelectedChips(prevChips => prevChips.filter((_, idx) => idx !== index));
        setSuggestions(prevSuggestions => {
            return prevSuggestions.includes(chipToDelete) ? prevSuggestions : [...prevSuggestions, chipToDelete];
        });
        setIsLastChipHighlighted(false);
        focusInput();
    };

    const addToSelectedChips = (value: string) => {
        setSelectedChips(prevChips => [...prevChips, value]);
        setSuggestions(prevSuggestions => prevSuggestions.filter(val => val !== value));
        setCurSuggestions(prevCurSuggestions => prevCurSuggestions.filter(val => val !== value));
        setInput('');
        focusInput();
    };

    const focusInput = () => inputRef.current?.focus();

    const onInputFocusChange = () => {
        setShowSuggestions(true);
        if (curSuggestions.length === 0) {
            setCurSuggestions(suggestions.slice(0, 4));
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setShowSuggestions(true);
    };

    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === 'Backspace') {
            if (input) {
            } else if (!isLastChipHighlighted && selectedChips.length > 0) {
                setIsLastChipHighlighted(true);
            } else if (isLastChipHighlighted) {
                deleteFromSelectedChips(selectedChips.length - 1);
                setIsLastChipHighlighted(false);
            }
        }
    }

    return (
        <div className='p-4 bg-white rounded text-slate-950 flex gap-2 max-w-[600px] flex-wrap'>
            {selectedChips.map((value, index) => (
                <Chip
                    key={`${value}-${index}`}
                    onDelete={() => deleteFromSelectedChips(index)}
                    className={isLastChipHighlighted && index === selectedChips.length - 1 ? 'bg-blue-200 border-blue-500' : ''}
                >
                    {value}
                </Chip>
            ))}
            <div className='relative'>
                <input
                    ref={inputRef}
                    placeholder='Write here...'
                    value={input}
                    onFocus={onInputFocusChange}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className='p-2 outline-none focus-within:outline-none'
                />
                {showSuggestions && (
                    <div className='absolute top-[100%] w-full h-fit border rounded shadow-lg z-10 bg-white'>
                        <div className='divide-y'>
                            {curSuggestions.map((suggestion, index) => (
                                <button
                                    key={`${suggestion}-${index}`}
                                    className='p-2 w-full hover:bg-slate-100 text-start outline-slate-600'
                                    onClick={() => addToSelectedChips(suggestion)}
                                    onFocus={() => setShowSuggestions(true)}
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default ChipInput;
