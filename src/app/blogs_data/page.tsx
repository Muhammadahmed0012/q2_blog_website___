import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
interface Iblogs {
    blog_image : string
    author_name : string
    heading :string
      description :string
      read_more :string
      _id:string
}
export default async function Blogs_data() {
   const res:Iblogs[] = await client.fetch(`*[_type=='blogs']`)

 console.log(res);
 

  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      { 
    res.map((data)=>{
console.log(data);

      
        return( 
          

        <div key={data?._id}>
            <Image src={urlFor(data.blog_image).url()} alt="blogImage" height={400} width={400} />
            <span>{data.author_name}</span>
            <h2>{data.heading}</h2>
            <p className='w-64'>{data.description}</p>
          <Link href={`/blogs_data/${data._id}`} ><button>{data.read_more}</button></Link> 
          hello
        </div>
     
        )
    })
  }
    </div>  
  )
  
  
}
