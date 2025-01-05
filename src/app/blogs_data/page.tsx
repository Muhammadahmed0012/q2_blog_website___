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
      depoloyed_at: string
}
export default async function Blogs_data() {
   const res:Iblogs[] = await client.fetch(`*[_type=='blogs']`)

 console.log(res);
 

  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center space-y-10'>
      { 
    res.map((data)=>{
console.log(data);

      
        return( 
          

        <div key={data?._id} className='flex flex-col items-start space-y-2'>
            <Image src={urlFor(data.blog_image).url()} alt="blogImage" height={400} width={400} className='w-[350px] h-[300px]'/>
            <div className='flex items-center space-x-2 ml-3'><span className='text-[15px]'>{data.author_name}</span>
            <span className='text-[12px] opacity-70'>{data.depoloyed_at}</span>
            </div>
            <h2 className='text-xl font-semibold sm:w-[22rem] w-[21rem] ml-3'>{data.heading}</h2>
            <p className='w-80 ml-3 text-[17px] font-extralight opacity-70'>{data.description}</p>
          <Link href={`/blogs_data/${data._id}`} ><button className='ml-4 text-[15px] font-semibold underline text-[#7c4ee4] transition-all duration-300 ease-in-out hover:text-[#5c2fbf] hover:scale-105 hover:underline-offset-4'>{data.read_more}</button></Link> 
       
        </div>
     
        )
    })
  }
    </div>  
  )
  
  
}
