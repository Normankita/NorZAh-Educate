import { Link } from 'react-router-dom';
import notfound from '../assets/images/Page_not_found.png'
import { useTitle } from '../hooks/useTitle';

export const PageNotFound = () => {
  useTitle("Page not found ")
  return (
    <section className="pageNotFound">
      <h1>404, Oops, Not found</h1>
      <img className='not' src={notfound} alt="Page Not found" />
      <Link to="/">
      <button>Back to Home</button>
      </Link>
    </section>
  )
}