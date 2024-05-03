import { footerLinks, footerLinks2 } from "../Constants/const"

export const Footer = () => {
  return (
    <>
    <div className="flex justify-center items-center py-8 border">
      <div>

        <div className="flex gap-2">
          <div>
            YTS©2011 - 2024 
          </div>
          <div className="flex gap-2 text-[#919191] text-sm font-bold">
          {
            footerLinks.map((item)=>{
              return <>
              <div>-</div>
              <div key={item.id}>
                <a href={item.link}>{item.name}</a>
              </div>
              
              </>
            })
          }
          </div>
         
          
        </div>
        <div className="flex justify-center gap-2 text-[#919191] text-sm font-bold">
          {
            footerLinks2.map((item, index)=>{
              return <>
              {
                index == 0? <div>

                </div>: <div>-</div>
              }
              
              <div key={item.id}>
                <a href={item.link}>{item.name}</a>
              </div>
              
              </>
            })
          }
          </div>

          <div className="flex justify-center text-[#919191] text-sm">
          By using this site you agree to and accept our User Agreement, which can be read here.
          </div>
      </div>

    </div>
    </>
  )
}
