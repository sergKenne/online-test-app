import CategoriesPage from "./components/categories/CategoriesPage"
import CategoryPage from "./components/category/CategoryPage"
import ResultPage from "./components/result/Result"
import { useAppContext } from "./context/AppContext"

const App = () => {
  const { page } = useAppContext()
  const pages = [<CategoriesPage/>, <CategoryPage/>, <ResultPage/>]

  return (
    <>
      {pages[page-1]}
    </>
  )


}

export default App