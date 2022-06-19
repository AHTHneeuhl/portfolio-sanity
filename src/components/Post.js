import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (src) => {
  return builder.image(src);
};

const Post = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      _id,
      title,
      slug,
      mainImage {
        asset->{
          _id,
          url,
        }
      },
      body,
      "authorName": author->name,
      "authorImage": author->image,
    }`
      )
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  if (!post) return <div>Loading</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="lordish text-3xl lg:text-6xl mb-4">
                {post.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(post.authorImage).url()}
                  alt={post.authorName}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <p className="lordish flex items-center pl-2 text-2xl">
                {post.authorName}
              </p>
            </div>
          </div>
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={post.body}
            projectId="j7muo1ov"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default Post;
