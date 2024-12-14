import Image from "next/image"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" height={14} width={14} />
        <input type="text" name="" id="" className="w-[200px] p-2 bg-transparent outline-none" placeholder="Search..." />
      </div>
      {/* Icons and User */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="messages" height={20} width={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="messages" height={20} width={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-xs text-white">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="avatar" width={36} height={36} className="rounded-full" />
      </div>
    </div>
  )
}

export default NavBar