import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./Components";
import { useEffect } from "react";

function App() {
  // jo todos context sai aye gye unko store kregye
  const [todos, setTodos] = useState([]);

  //define methods
  /* individuals todo nhi aya h abhi TODOS hai 
   to do  jana chahiye arrys kai andar (todos) but its possbile uske andar values ho 
   setTodos(todo ) issai purani sari values delete ho jaye gyi & todo aa jayega BUT WE DONT WANT THIS
   toh hamko purani state ka access chahiye 
   CAALBACK SAI ISKE PURANI STATE KI VALUE MILJAYE GYI (prev sai purana array milgya )
   new arrays bnaya usmai purani value bhi daldo & new wali bhi 
   purani spread kardi ... prev 

   */
  const addTodo = () => {
    setTodos((prev) => [{ id: Date.now(), ...todos }, ...prev]);
  }; // to do bnanana padega isliye pobject lia uniqye id li h (NEW TODO { id: Date.now(), ...todos )
  /* to-dos ek array hai usper ek loop lgana padega  , 
    then find konsi id wale array ki property ko  update ekrna chahte ho
    nd uske andar naya todo add  krednegye */

  const updatedTodo = (id, todo) => {
    // konsa esa todo h jo id sai macth kr rha tanki new todo add ho jaye
    //When you add a new todo, you want to keep the old todos and add the new one to the list.
    setTodos(
      (prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) // har ek element per jao uska id find karo
    );
    // konsi id update krni ?
    // to do array h usper loop lagya :map sai har ek todo miljayega
    // ussai konsi arary ki id ko upade krna h ?
    // map lagaya har todo milgya vo object h nd har object ki id h
    // prev todo is indivdual todo uske id per jao nd find ?
    // aagr id milgyi h toh dal do
  };

  // naya array vo bnanan h jismai purani wali nhi ho (id)
  // jo match nhi krega vo aa jayega
  // delete kai time map is not prefeered

  const deleteTodo = (id) => {
    // sirf id chahiye deletye hone kai liye
    //The filter function creates a new list that only includes todos whose id does not match the one you want to delete.
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // prev ka acess lena padega // jo jo match nhi kreega vo ajayega
  };
  // toogle :object kai andar jana compltred value ko toggle karo
  const ToggleCompleteTodo = (id) => {
    setTodos.apply(
      (prev) =>
        prev.map(
          (prevTodo) =>
            prevTodo === id ? { ...prevTodo, completed: !prevTodo } : prevTodo // true : false (agar match nhi kara prev todo ko prev todo he rhende do)
        ) // ...prevTodo means phle sari values  leelo  & then overide karod complted value ko
    );
    // aagr id sai match krta hai tabhi toggle
    // false ki jagah prev to do rehnde do
  };

  /**** LOCAL STORAGE   SET : key & vlaue btanai padti h GET :  mai only key value   ***/
  // jab application reload hoti h its possbile todos phele he ho toh vo load ho jaye
  // konsa esa method h jo local storgae jakr sari values lao & usko todos ami isert karod
  useEffect(() => {
    //localStorage.getItem("todos"); // sari value string mai hoti h but json mai chahiye
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []); // aplication laod kari sari vlaues aagyi
  // sari vlaues jo todos mai add ho rhi h unko  local storage mai add krwana chahta hun

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, ToggleCompleteTodo, updatedTodo }}
    >
      {/* provider provides value */}
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
