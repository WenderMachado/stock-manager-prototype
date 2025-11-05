import Header from "../components/Header/Index";
import { Outlet } from "react-router-dom";


export default function RootLayout(){
  return(
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    </>
  )
}