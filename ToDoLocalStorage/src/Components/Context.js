import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "msg",
      completed: false, 
    },
// {}, {} ese  todos aDD HO gye
  ],
  // upar hogyi properties (values) niche uski functionality(method) (only defiantion)
// ap merko todo pass karogye function koi kam krega
addTodo:(todo)=>{}
updatedTodo:(id,todo)=>{}
deleteTodo:(id)=>{}
ToggleCompleteTodo:(id)=>{}

});

directly ek hook export kr rhe h
/* 
Usage: When you use useTodo in a component, it internally calls 
useContext(TodoContext) and returns the context value.
 This allows you to access the current todos when u use (useTodo)
*/
export const useTodo = () => {

  return useContext(TodoContext); // JAB BHI USE CONTEXT USE KRNA H USKO HMESHA CONTEXT CHAHIYE (KISKE NBARE MAI BAAT KRNI H )
};
// maiN file mai jakar .provider krne sai acha yeh karlo
export const TodoProvider = TodoContext.Provider;
