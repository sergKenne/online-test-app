import "./categories.scss"
import data, { CategoriesType } from '../../data';
import { Storage } from '../../utils';
import { useAppContext } from '../../context/AppContext';

const CategoriesPage = () => {
  const { setPage,setCategory } = useAppContext()
  
  const handleSetCategory = (category:string) => {
    setPage(2)
    setCategory(category)
    Storage.setItem("category", category)
    Storage.setItem("page", 2)
  }

  return (
    <div className="categories">
      <div className="container">
        <h1 className="categories__title">Просто выберите предмет и начните тренировку</h1>
        <ul className="categories__list">
          {
            Object.keys(data.categories).map((key) => (
              <li className="categories__list-item" key={key} onClick={() => handleSetCategory(key)}>
                <img className="categories__list-img" src={`/images/${data.categories[key as keyof CategoriesType].img}`} alt='frontend' width={300} height={200} />
                <h2 className="categories__name">{data.categories[key as keyof CategoriesType].name}</h2>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default CategoriesPage
