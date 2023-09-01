import dynamic from "next/dynamic";

const PostPage = dynamic(() => import("../../../components/PostPage"));

const Posts = () => {
  return <PostPage />;
};

export default Posts;
