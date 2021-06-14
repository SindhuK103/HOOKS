import React, {useContext} from 'react';

const themes = {
    big: {
        fontsize: "28px"
    },
    small: {
        fontsize: "16px"
    }
};
//creating the context object
const ThemeContext = React.createContext(themes);
function Context() {
    return (
        <ThemeContext.Provider value={themes.big}>
            <ThemedButton />
        </ThemeContext.Provider>
    );
}
function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ fontSize: theme.fontsize }}>
            Example for useContext
        </button>
    );
}

    export default Context;
