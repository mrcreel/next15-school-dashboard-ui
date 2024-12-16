import Image from "next/image"

const UserCard = ({type}: {type: string}) => {
  return (
    <div className="odd:bg-projectPurple even:bg-projectYellow rounded-2xl p-4 flex-1 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
        <Image src="/more.png" alt="more" width={20} height={20}/>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <span className="flex">
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        <h2 className="text-sm font-medium text-gray-500">s</h2>
        </span>
      </div>
    </div>
  )
}

export default UserCard