import { blogType, Helpers } from "@/Helpers";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const PostPage = dynamic(() => import("../../../components/PostPage"));

const Posts = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const post = await Helpers.getSingle(id);
  if (!post) {
    redirect("/not-found");
  }
  return <PostPage post={post as blogType} />;
};

export default Posts;
