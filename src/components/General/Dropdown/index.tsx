import { dropdownlist } from '../../Constants/const'

export const Dropdown = () => {
  return (
    <>
      <div className='dark:text-[#282828] grid grid-cols-6 gap-8'>
        {
          dropdownlist.map((item, index) => {
            return (
              <div key={index} className='mt-4'>
                
                <div className='dark:text-[#919191] text-sm font-bold'>
                  {item.name+ ':'}
                </div>
                

                <select name={item.name} id={item.id} className='p-2 rounded-md text-sm bg-[#282828] text-[#919191] w-full' > 
                  {
                    item.options.map((option, idx) => {
                      return (
                        <option key={idx} value={option}>{option}</option> 
                      )
                    })
                  }
                </select>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
