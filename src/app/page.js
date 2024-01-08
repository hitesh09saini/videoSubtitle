
import Link from "next/link"
import { CldVideoPlayer } from "next-cloudinary"

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <nav className="h-[40px] text-2xl text-white font-bold  bg-orange-400 flex px-2 items-center">
        videoManager
      </nav>
      <div className="flex items-center border ">
        <Link href='/uploadvideo'>
          <div className="m-2 text-6xl w-[80px] h-[80px] border font-thin rounded-full flex justify-center items-center active:bg-gray-200 hover:text-7xl">
            +
          </div>
        </Link>
        <div className="text-4xl">
          Upload  Videos
        </div>
      </div>
      <div>
        <p className="p-1">All Videos</p>
        <div>
          {/* upload all videos */}
{/* 
          <CldVideoPlayer
            id="sea-turtle"
            width='1928'
            height= '1080'
            src="samples/sea-turtle"
          
          /> */}

        </div>
      </div>
    </main>
  )
}
