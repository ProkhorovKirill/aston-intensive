import { createContext, useState } from "react";
import useDebounce from "../lib/filterByLength";
import { filterPostsByLength } from "../lib/filterByLength";
import type { FilterProviderProps } from "../model/interfaces";
import styles from './postLengthFilter.module.css'

export const Filter = createContext<FilterProviderProps | null>(null);

export default function PostLengthFilter({children}: {children: React.ReactNode}) {

    const [maxSymbolCount, setMaxSymbolCount] = useState<number | string>('');
    const debouncedSymbolCount = useDebounce({value: Number(maxSymbolCount) || 0, delay: 200});
    const [inputError, setInputError] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

        const value = e.target.value;

        if (value === '') {
            setMaxSymbolCount(0);
            setInputError('');
            return;
        }

        const numValue = Number(value);

        if (isNaN(numValue)) {
            setInputError('Введите число');
            setMaxSymbolCount('');
            return;
        }
        
        if (numValue > 999) {
            setInputError('Максимальное значение: 999');
            setMaxSymbolCount(999);
            return;
        }
        
        setMaxSymbolCount(numValue);
        setInputError('');

    }

    return (

        <>
            <Filter.Provider value={{debouncedSymbolCount, filterPostsByLength}}>
                <label htmlFor="filterByLength" className={styles.filterByLengthLabel}>
                    Введите максимальную длину заголовка:
                    <input  type="text" 
                            value={maxSymbolCount}
                            onChange={handleChange} 
                            name="filterByLength" 
                            id="filterByLength"
                            className={styles.filterByLengthInput}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            onKeyDown={(e) => {
                                if (!/[0-9]/.test(e.key) && 
                                    !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                                    e.preventDefault();
                                }   
                            }}

                            />
                </label>
                {inputError && <span className={styles.errorText}>{inputError}</span>}
                {children}
            </Filter.Provider>
        </>

    )

}