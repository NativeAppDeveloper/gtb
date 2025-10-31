import { Button } from "@/components/ui/button"

export const ButtonComponent=({icon,label})=>{
   return(
    <>
     <   Button variant="primary" className=" G-blue-bg  ">
                {label} {icon}
              </Button>
    </>
   )
}