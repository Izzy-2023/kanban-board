// Load environment variables from .env file
require('dotenv').config();


import Sidebar from "./components/Sidebar";
import BoardTasks from "./components/BoardTasks";

export default function Home() {
return (
 <main className="flex h-full">
   <Sidebar />
   <BoardTasks />
 </main>
);
}