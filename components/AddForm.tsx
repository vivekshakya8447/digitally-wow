import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className=" font-montserrat flex space-x-4 items-center border-b  border-2 px-4  py-2  rounded-md text-sm font-medium"
        >
            {/* <div><Add/></div> */}
            <p>Add New</p>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed top-0 inset-0 z-10 bg-black bg-opacity-30 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed top-0 inset-0 " />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md  my-8 overflow-hidden text-left align-middle transition-all transform bg-white  shadow-xl pb-5 rounded-2xl">
                <div className=' bg-surface '>
               
                    <div className='flex justify-center'>
                        {/* <Person />                      */}
                    </div>
                    {/* <div className=''>
                      <Close />
                      </div> */}
                </div>
                <div className='px-10'>
                    <div className="mt-2">
                    <label className=' font-montserrat font-medium text-sm'>Name</label><br/>
                    <input type="text"  className=' bg-surface rounded-md border-none w-full p-0'/>
                    </div>
                    <div className="mt-2">
                    <label className=' font-montserrat font-medium text-sm'>Email</label><br/>
                    <input type="text"  className=' bg-surface rounded-md border-none w-full p-0'/>
                    </div>
                    <div className="mt-2">
                    <label className=' font-montserrat font-medium text-sm'>Phone</label><br/>
                    <input type="text"  className=' bg-surface rounded-md border-none w-full p-0'/>
                    </div>
                    <div className="mt-2">
                    <label className=' font-montserrat font-medium text-sm'>Role</label><br/>
                    <input type="text"  className=' bg-surface rounded-md border-none w-full p-0'/>
                    </div>
                    <div className="mt-2">
                    <label className=' font-montserrat font-medium text-sm'> password</label><br/>
                    <input type="text"  className=' bg-surface rounded-md border-none w-full p-0'/>
                    </div>
                    <div className="mt-2">
                    <label className=' font-montserrat font-medium text-sm'>Confirm password</label><br/>
                    <input type="text"  className=' bg-surface rounded-md border-none w-full p-0'/>
                    </div>
                    <div className="mt-4 ">
                        <button
                            type="button"
                            className="w-full text-base font-montserrat font-medium login-bg text-white py-1"
                            // onClick={closeModal}
                        >
                        SAVE
                        </button>
                     </div>
                </div>

              
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
