import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const CreatePage = () => {
const nav = useNavigate()

useTitle("Create Post")
  const postRef= collection(db, "posts")
  console.log(auth)

  async function handleSubmit(event){
    event.preventDefault()
    
    const post ={
      title: event.target.title.value,
      description: event.target.description.value,
      author:{
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        dp: auth.currentUser.photoURL
      }
    }
    await addDoc(postRef, post)
    nav("/")
  }
  return (
    <section className="create">
      <div className="heading">
        <h1>Create new Post</h1>
      </div>
      <form className="createPost" onSubmit={handleSubmit}>
        <input type="text" name="title" className="title" placeholder="title" maxLength="50" required />
        <textarea name="description" className="description" placeholder="description" maxLength="6000" required/>
        <button type="submit" className="submit">Create</button>
      </form>
    </section>
  )
}
