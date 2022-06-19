import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import sanityClient from "../client";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center lordish">Blog Posts</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to the Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={post.slug.current}>
              <Link to={`/posts/${post.slug.current}`}>
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-800"
                  key={index}
                >
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute"
                  />
                  <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                    <h3 className="text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                      {post.title}
                    </h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Posts;
