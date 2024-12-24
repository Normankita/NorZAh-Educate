import { useEffect, useRef, useState } from 'react';
import {CardComponent} from '../components/CardComponent'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useTitle } from '../hooks/useTitle';
import { SkeletonComponent } from '../components';
export const HomePage = () => {
  const postRef = useRef(collection(db, "posts"))

  useTitle("Home")

  const [toggle, setToggle]=useState(false)
const [posts, setPosts] = useState(new Array(2).fill(false))
useEffect(()=>{
 async function fetchPost() {
  const data = await getDocs(postRef.current)
  setPosts(data.docs.map(document=>({...document.data(), id:document.id})))   
  }
  fetchPost()
  console.log("---")
},[toggle, postRef])
  return (
    <section>
       {posts.map((post)=>(
        post? (<CardComponent post={post} key={post.id} toggle={toggle} setToggle={setToggle}/>): (<SkeletonComponent/>)
      ))}
    </section>
  )
}
