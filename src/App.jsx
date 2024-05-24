import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/home";

function App() {
  const [spendingLists, setSpendingsLists] = useState([]);
  console.log(spendingLists);
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                spendingLists={spendingLists}
                setSpendingsLists={setSpendingsLists}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
