import { useState ,useEffect} from 'react'
import { Switch } from '@headlessui/react'

export default function Example({value,change}) {
  const [enabled, setEnabled] = useState(value)
  const handleChange=(e)=>{
    setEnabled(e)
    change(e)
  }
useEffect(() => {
  setEnabled(value)
}, [value])

  return (
    <div className="">
      <Switch
        checked={enabled}
        defaultChecked={enabled}
        onChange={handleChange}
        className={`${enabled ? 'bg-green-500' : 'bg-gray'}
          relative inline-flex flex-shrink-0 h-[14px] w-[28px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-3' : 'translate-x-0'}
            pointer-events-none inline-block h-[14px] w-[14px] rounded-full relative -top-0.5 bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  )
}
