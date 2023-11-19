import { Helpers } from "@/Helpers";
import { blogType, Props } from "@/Helpers/types";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const PostPage = dynamic(() => import("../../../components/PostPage"));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const product = (await Helpers.getSingle(id)) as blogType;

  return {
    title: "AMAN latest news | " + product.slug,
    description: product.blog_title,
  };
}

const Posts = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const post = await Helpers.getSingle(id);
  if (!post) {
    redirect("/not-found");
  }
  return <PostPage post={post as blogType} />;
};

export default Posts;
