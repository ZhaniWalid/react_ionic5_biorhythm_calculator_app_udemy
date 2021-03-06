// 'useState' => Allows us to manage 'State & Functional Components'
import { useState } from 'react';

//* 'React HOOKS' => Allows us to use in all our work the 'functional Component' ( Exmple: 'const IngredientForm = React.memo(props => {....});' )
//* => AND there is no need to use the 'class based Component' ( Exmple; 'class IngredientForm extends Component {...}' )
//* => REQUIRE :: '@version — 16.8.0' => OR + for 'React version'

// Custom 'Hook' should always be: 'use' keyword + 'X name' => like: 'useLocalStorage'
//-- export function useLocalStorage(key, defaultValue) {
export const useLocalStorage = (key, defaultValue) => { // This is the same func also but with arrows (=>) way (ES6)
    // 'localStorage' => it's a 'JavaScript built-in var by default' 
    //      ==> To 'Store/Remove/Get...' Data in the 'Local Storage' of the browser
    //- 'getInitialValue()' func => Will be called by 'useState() once' when it 'initialise a value for a Component'...
    //-     ...=> rather than 'every time the Component is re-rendered'
    const getInitialValue = () => localStorage.getItem(key) ?? defaultValue; // if 'localStorage.getItem(key) != null ... getInitialValue = localStorage.getItem(key)' else 'getInitialValue = defaultValue' 
    const[value, setValue] = useState(getInitialValue); // initial value = 'getInitialValue'
    const setAndStoreValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, newValue);
    };
    return [value, setAndStoreValue];
};