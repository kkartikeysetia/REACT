import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import RecItem from "./RecItem";

/*Home Component:

Fetches global state (recipeList and loading) using useContext.
Displays a loading message if data is being fetched.
Renders a list of recipes if available, otherwise shows a "nothing to show" message.
*/

export default function Home() {
  // from any context u manage state globally
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading) return <div>Loading...Please wait!</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {/* The Home component handles the logic of fetching and iterating over the list, 
      while RecItem focuses on rendering each item.  */}
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}
// receipe list in home render
