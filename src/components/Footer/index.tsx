import { footerLinks, footerLinks2 } from "../Constants/const"

export const Footer = () => {
  return (
    <>
    <div className="flex justify-center items-center py-8 border-t border-textsec">
      <div className="grid gap-2">

        <div className="flex gap-2">
          <div>
            YTS©2011 - 2024 
          </div>
          <div className="flex gap-2 text-textsec text-sm font-bold ">
          {
            footerLinks.map((item)=>{
              return <>
              <div>-</div>
              <div key={item.id} className="hover:text-textprim">
                <a href={item.link}>{item.name}</a>
              </div>
              
              </>
            })
          }
          </div>
         
          
        </div>
        <div className="flex justify-center gap-2 text-textsec text-sm font-bold ">
          {
            footerLinks2.map((item, index)=>{
              return <>
              {
                index == 0? <div>

                </div>: <div>-</div>
              }
              
              <div key={item.id} className="hover:text-textprim">
                <a href={item.link}>{item.name}</a>
              </div>
              
              </>
            })
          }
          </div>

         
      <div className="flex justify-center text-textprim text-xs ">
      
          <p>By using this site you agree to and accept our <a href="/" className="text-textsec hover:text-textprim"> User Agreement </a> , which can be read <a href="/" className="text-textsec hover:text-textprim">
          here</a>.
            </p>
            </div>
          </div>

    </div>
    </>
  )
}
