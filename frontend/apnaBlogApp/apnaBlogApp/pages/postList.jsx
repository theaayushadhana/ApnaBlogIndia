import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Container, Grid,  } from "@mui/material";
import PostCard from "../components/postCard";
const postList = () => {
    const [posts , setPosts] = useState([]);
    const [loading ,setLoading] = useState(true);
    useEffect(() => {
       const fetchPost = async() => {
        try {
            const response = await axios.get('http://apnablogapp.com/api/posts');
            console.log(response.data);
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('error getting post' , error.message);
            setLoading(false);
        }
       };
       fetchPost();
    } , [])
    return(<>
       
       <Container>

      <Grid container spacing={3} direction={"column-reverse"} marginTop={5}>
        {posts.length > 0 ? (
          posts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <PostCard post={post} />
            </Grid>
          ))
        ) : (
          <div>Loading content...</div>
        )}
      </Grid>
    </Container>
     
    </>)
}
export default postList;

