import { RouterProvider } from "react-router-dom";
import { SelectedMonthProvider } from "./context/SelectedMonthContext"; // 수정된 부분
import { SpendingProvider } from "./context/SpendingContext";
import router from "./routes/router";

function App() {
  return (
    <SpendingProvider>
      <SelectedMonthProvider>
        <RouterProvider router={router} />
      </SelectedMonthProvider>
    </SpendingProvider>
  );
}

export default App;
