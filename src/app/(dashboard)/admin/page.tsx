import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex gap-4 justify-between flex-wrap">
        {/* USER CARDS */}
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      {/* Right */}
      <div className="bg-blue-200 w-full lg:w-1/3">Right</div>
    </div>
  )
}

export default AdminPage