import(useContext, createContext) from 'react'; // waha crate context bnaya then exportt
export const ThemeContext=createContext({ // pichle mai () ismai kuch nhi lia tha
    // yaha mai chahta hun koi object default value ho becoz directly koi call krdega toh crash hojayega 
    themeMode:"light"
    // just 2 methods 
    darkTheme:()=>{}
    lightTheme:()=>{}
    // jab bhi koi context call krega usko yeh 2 method milengye & theme mode 
// yaha aapne varaible bhi diya hai & method bhi 
})
// pichle mai usercontextprovider mai uske andar children pass kiya h
// iss abr yahi ssai
export const 