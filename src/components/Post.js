import { Link } from "react-router-dom"
import '../App.css';
const Post = ({ post }) => {
    

      return ( 
        <div className="card" >
        <div className="card2">
          <Link to={`/post/${post.id}`}>
            <h2>{post.incident} At {post.address}</h2>
          </Link>
          <span style={{color:"red"}}>{post.incident}</span>
        </div>
        </div>
      );
    };
  export default Post
        