import * as i from './imports'

function App() {
  return (
    <i.BrowserRouter>
      <i.BaseLayout>
        <i.React.Suspense fallback={<div>Loading...</div>}>
          <i.Routes>
            <i.Route path={i.ROUTES.MAIN} element={<i.Main />} />
            <i.Route path={i.ROUTES.ABOUT} element={<i.About />} />
            <i.Route path={i.ROUTES.CONTACT} element={<i.Contact />} />
            <i.Route path={i.ROUTES.EXPERIENCE} element={<i.Experience />} />
            <i.Route path={i.ROUTES.PORTFOLIO} element={<i.Portfolio />} />
            <i.Route
              path={i.ROUTES.QUALIFICATION}
              element={<i.Qualification />}
            />
          </i.Routes>
        </i.React.Suspense>
      </i.BaseLayout>
    </i.BrowserRouter>
  )
}

export default App
