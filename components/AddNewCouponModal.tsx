import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Add from '../../assets/svg/Add'

import ToggleBtn from './ToggleBtn';
import React from 'react';


export default function MyModal({ refetch }) {
  const notifyerorr = (id, msg) => {
    toast.error(`${msg}!`, { position: toast.POSITION.TOP_CENTER, toastId: id })
  }

  const getProduct = async () => {
    const respone = await api.get('/products/')
    return respone
  }
  const {data:products} = useQuery("editProducsssssat", getProduct)



  let [isOpen, setIsOpen] = useState(false)



 
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    setValue,
    reset,
    watch,
    control,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>()
  const openModal = () => {
    setIsOpen(true)
    

  }
  const closeModal = () => {
    setIsOpen(false)
    reset()
    
  }
  const mutation = useMutation((data) => api.post("/coupons/new/", data), {
    onSuccess: (res) => {
      reset()
      refetch()
      closeModal()
      console.log(res)
    },
    onError: ({ response }) => {
      notifyerorr('erro', response.data.message)
    }
  });


  const watchFields = watch(["validUpto"]);
  React.useEffect(() => {
    console.log(watchFields)
  }, [watchFields]);



  const onSubmit = (dataForm: FormValues) => {
    let data = (JSON.parse(JSON.stringify(dataForm)));
    mutation.mutate(data);
    // console.log(data)
  }

  const [togle, settogle] = useState(false)
  const handleSwitch = (e) => {
    console.log(e)
    settogle(e)
  }

  const [selectedDate, setselectedDate] = useState()

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center px-4 py-2 space-x-4 text-sm font-medium border-2 border-b rounded-md font-montserrat">
          <div>
            <Add />
          </div>
          <p>Add New</p>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 top-0 z-10 overflow-y-auto bg-black bg-opacity-30" onClose={closeModal}>
          <div className="h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 top-0 " />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-md pb-5 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className=" bg-surface py-7">
                  <div className="relative flex justify-center">
                    <p className="text-lg font-bold uppercase font-montserrat">Add coupon </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="px-10">



                  <div className="mt-2">
                    <label className="text-sm font-medium font-montserrat">Coupon Code</label>
                    <br />
                    <input
                      type="text"
                      {...register('code', {
                        required: 'Coupon code is required.',
                        minLength: {
                          value: 4,
                          message: 'minimum length of coupon code name must be 4'
                        }
                      })}
                      className={`w-full p-0 border outline-none rounded-md bg-surface ${errors.code ? 'border-accent' : 'border-transparent'
                        }`}
                    />
                    {errors.code && <p className="text-xs text-accent">{errors.code.message}</p>}
                  </div>



                  <div className="mt-2">
                    <label className="text-sm font-medium font-montserrat">Products</label>
                    <br />

                    <Controller
                      control={control}
                      rules={{ required: true}}
                     
                      name="productSku"
                      render={({ field: { onChange, value, ref,}}) => (
                        <Select
                        
                          value={products?.data.find((c) => c.sku === value)}
                          onChange={val => onChange(val.map(c => c.sku))}
                          options={products?.data}
                          getOptionLabel={option =>
                            `${option.sku}`
                          }
                          getOptionValue={option =>
                            `${option.sku}`
                          }
                          isMulti
                        />
                      )}
  />
                    {errors.productSku && <p className="text-xs text-accent">product is required</p>}
                  </div>



                  <div className="mt-2">
                    <label className="text-sm font-medium font-montserrat">Text</label>
                    <br />
                    <input
                      type="text"
                      {...register('text', {
                        required: 'text is required.',
                        minLength: {
                          value: 4,
                          message: 'minimum length of text name must be 4'
                        }
                      })}
                      className={`w-full p-0 border outline-none rounded-md bg-surface ${errors.text ? 'border-accent' : 'border-transparent'
                        }`}
                    />
                    {errors.text && <p className="text-xs text-accent">{errors.text.message}</p>}
                  </div>



                  <div className="mt-2">
                    <label className="text-sm font-medium font-montserrat">Coupon Amount %</label>
                    <br />
                    <input
                      type="number"
                      {...register('amount', {
                        valueAsNumber: true,
                        required: 'amount is required',

                      })}
                      className={`w-full p-0 border outline-none rounded-md bg-surface ${errors.amount ? 'border-accent' : 'border-transparent'
                        }`}
                    />
                    {errors.amount && <p className="text-xs text-accent">{errors.amount.message}</p>}
                  </div>



                  <div className="mt-2">
                    <label className="text-sm font-medium font-montserrat">Allowed Customer Numbers</label>
                    <br />
                    <Controller
                      control={control}
                      defaultValue={[]}
                      
                      name="allowedPhoneNumbers"
                      render={({ field: { onChange, value, ref } }) => (
                        <ReactTagInput 
                        placeholder="Type and press enter"
                        editable={false}
                        
                        tags={value?(value):([])} 
                        onChange={(newTags) => onChange(newTags)}
                      />
                      )}
                    />
                    
                    {errors.allowedPhoneNumbers && <p className="text-xs text-accent"></p>}
                  </div>



                  <div className="mt-2">
                    <label className="text-sm font-medium font-montserrat">Max Discoun</label>
                    <br />
                    <input
                      type="number"
                      {...register('maxDiscoun', {
                        valueAsNumber: true,
                      })}
                      className={`w-full p-0 border outline-none rounded-md bg-surface ${errors.maxDiscoun ? 'border-accent' : 'border-transparent'
                        }`}
                    />
                    {errors.maxDiscoun && <p className="text-xs text-accent">{errors.maxDiscoun.message}</p>}
                  </div>



                  <div className="mt-2">
                    <label className="text-sm font-medium font-montserrat">Min Order Amount</label>
                    <br />
                    <input
                      type="minOrderAmount"
                      {...register('minOrderAmount', {
                        valueAsNumber: true,
                      })}
                      className={`w-full p-0 border outline-none rounded-md bg-surface ${errors.minOrderAmount ? 'border-accent' : 'border-transparent'
                        }`}
                    />
                    {errors.minOrderAmount && <p className="text-xs text-accent">{errors.minOrderAmount.message}</p>}
                  </div>



                  <div className="mt-2">
                    <label className="text-sm font-medium font-montserrat">Expiry Date</label>
                    <br />
         
                    <input
                      type="date"
                        
                      {...register('validUpto', {
                        valueAsDate: true,
                        required: "Expiry Date is required"
                      })}
                      className={`w-full p-0 border outline-none rounded-md bg-surface ${errors.validUpto ? 'border-accent' : 'border-transparent'
                        }`}
                    />
                    {errors.validUpto && <p className="text-xs text-accent">{errors.validUpto.message}</p>}
                  </div>
                  <br />
                  <div className="mt-2 flex items-start justify-between">

                    <label className="text-sm font-medium font-montserrat">Hidden</label>
                    <span className='pl-12'></span>
                    <Controller
                      control={control}
                      defaultValue={false}
                      name="isHidden"
                      render={({ field: { onChange, value, ref } }) => (
                        <ToggleBtn change={(checked) => onChange(checked)} value={value} />

                      )}
                    />


                    {errors.isHidden && <p className="text-xs text-accent">{errors.isHidden.message}</p>}
                  </div>

                  <div className="mt-4 ">
                    <button type="submit" className="w-full py-1 text-base font-medium text-white font-montserrat bg-accent">

                      {mutation.isLoading ? (<>
                        <PulseLoader color={"#ffffff"} loading={mutation.isLoading} size={6} />
                      </>) : (' SAVE')}
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
