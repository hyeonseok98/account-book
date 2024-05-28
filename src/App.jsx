import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dummyData from "./data/dummyData.json";
import DetailPage from "./pages/deatil/page";
import HomePage from "./pages/home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [spendingLists, setSpendingsLists] = useState(dummyData);
  return (
    <div>
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
          <Route
            path="/spending/:id"
            element={
              <DetailPage
                spendingLists={spendingLists}
                setSpendingsLists={setSpendingsLists}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
