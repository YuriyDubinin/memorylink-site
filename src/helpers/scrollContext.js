import {createContext, useContext} from 'react';

export const ScrollContext = createContext(null);

export const useScroll = () => {
    const context = useContext(ScrollContext);

    if (!context) {
        throw new Error('useScroll must be used inside scrollContext.Provider');
    }

    return context;
};
