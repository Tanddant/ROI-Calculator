import { useState, useEffect } from 'react';

const GetQueryValue = (key: string) => {
    const query = new URLSearchParams(window.location.search);
    return query.get(key);
}

const SetQueryValue = (key: string, value: string) => {
    const query = new URL(window.location.href);
    query.searchParams.set(key, value);
    window.history.replaceState(null, '', query.toString());
}

export default function useQuery<T>(key: string, defaultValue: T): [T, (newValue: T) => void] {
    const [value, setValue] = useState<T>(GetQueryValue(key) as any || defaultValue);


    const setQueryValue = (newValue: T) => {
        SetQueryValue(key, newValue as any);
        setValue(newValue);
    }

    return [value, setQueryValue];
}