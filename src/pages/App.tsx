import * as i from "./imports";

function App() {
  return (
    <div className="w-full h-screen bg-blue-500">
      <i.BrowserRouter>
        <i.Routes>
          <i.Route path={i.ROUTES.MAIN} element={<i.Main />} />
        </i.Routes>
      </i.BrowserRouter>{" "}
    </div>
  );
}

export default App;
