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
export default async function Blog({params}: {params: Promise<{blog : string }>})  {
  const { blog } = await params;

  const query = await client.fetch(`*[_type == 'blogs' && _id==$id][0]`, {
    id: blog,
  });
 
  

  return (
    <div className="">
     <div className="flex flex-col items-center space-y-5  ">
     <Image
  src={urlFor(query.blog_image).url()}
  alt="Blog Image"
  height={400}
  width={900}
  className="w-full max-w-[900px] h-[300px] rounded-lg shadow-md"
/>

      
      

      <span>{query.author_name}</span> 
       <h2>{query.heading}</h2>
       <p>{query.description2}</p>
       <CommentSection/>
       </div>
    </div>
  );
}
