import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
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
export default async function Blog({params}: {params: Promise<{blog : string }>})  {
  const { blog } = await params;

  const query = await client.fetch(`*[_type == 'blogs' && _id==$id][0]`, {
    id: blog,
  });
 
  

  return (
    <div>
      <Image
        src={urlFor(query.blog_image).url()}
        alt="img"
        height={100}
        width={100}
      />
       {query.author_name}
       {query.heading}
       {query.description}
    </div>
  );
}
