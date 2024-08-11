export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">Food Recipe</h2>
      <form>
        <input
          type="text"
          placeholder="Enter items"
          name="search"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-500"
        />
      </form>
    </nav>
  );
}
// to manage state we need to use context its more clenaer
// create context , provide context,then consume the context
// global state will receive children :  all, the nested compoents
// return will now provider will provide the state then consume
// we will accesss this using wrap compoent in root
// app is the combinantion of all nested componets
