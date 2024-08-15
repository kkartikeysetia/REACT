import{useContext, createContext,useState}from 'react'; // waha crate context bnaya then exportt

export const ThemeContext=createContext({ // pichle mai () ismai kuch nhi lia tha
// jab context bane koi value feed ho phele sai hee 
//yaha mai chahta hun koi object default value ho becoz directly koi call krdega toh crash hojayega 
    themeMode:"light"
    // just 2 methods 
    darkTheme:()=>{}
    lightTheme:()=>{}
    // jab bhi koi context call krega usko yeh 2 method milengye & theme mode 
// yaha aapne varaible bhi diya hai & method bhi 
})
// pichle mai usercontextprovider mai uske andar [varaible & method pass kr rh hai ]
// iss bar yahi ssai export varaible ko 
export const ThemeProvider=ThemeContext.Provider

// custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}
// har jagah 2 bari import kar rhe thai (use context & usercontext)
// yaha merko sirf use theme he import krna h use theme khud he use context ka ref dedega 