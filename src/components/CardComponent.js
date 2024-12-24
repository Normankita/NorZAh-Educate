import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const CardComponent = ({post, toggle, setToggle}) => {

  const {author, description, id, title}=post;

  const document = doc(db, "posts", id)
  async function handleDelete(){
    deleteDoc(document)
    setToggle(!toggle)
  }
  
  const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author"><span><img src={author.dp} alt="" /></span>{author.name}</span>
        {isAuth&& (auth.currentUser.uid===author.id)&&<span onClick={handleDelete} className="delete"><i className="bi bi-trash3"></i></span>}
      </p>
    </div>
  )
}

