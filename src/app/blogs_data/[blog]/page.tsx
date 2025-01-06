import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import CommentSection from "@/components/coments";
// interface Iblog {
//   blog: string;
// }
// // interface Iblog_data{
// //   blog_image:string
// //   author_name:string
// //   heading:string
// //   description:string
// //   read_more:string
// // }
export default async function Blog({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;

  const query = await client.fetch(`*[_type == 'blogs' && _id==$id][0]`, {
    id: blog,
  });

  return (
    <div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
    <div className="flex flex-col items-center sm:items-start">
      <Image
        src={urlFor(query.blog_image).url()}
        alt="Blog Image"
        height={500}
        width={1000}
        className="w-full sm:w-[90%] lg:max-w-[1200px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
      />
      <div>
      <span className="text-lg font-light mt-4 opacity-80">{query.author_name}</span>
      <span className="text-sm font-light mt-1 opacity-50">{query.depoloyed_at}</span>
      </div>
    </div>
    <h2 className="text-2xl sm:text-3xl font-semibold mt-6 text-center sm:text-left">
      {query.heading}
    </h2>
    <p className="text-base sm:text-lg mt-4 text-center sm:text-left opacity-80">
      {query.description2}
    </p>
  </div>
  <CommentSection/>
  </div>
  );
}
