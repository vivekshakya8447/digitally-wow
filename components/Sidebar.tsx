import Logo from '../assets/svg/Logo'

import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

import { useRouter } from 'next/router'

import api from "../lib/api";
import { useState } from 'react'

const Customers = () => {

  return (
    <div className="w-1/5 h-screen pb-3 overflow-y-scroll login-bg">
      <div className="w-full mx-auto">
        <div className="my-10">
          <Logo />
        </div>
        <div className="w-full mx-auto">
          <Link replace={true} href="/Overview">
            <a>
              <div
                className="flex items-center py-2 space-x-4 cursor-pointer pl-14 border-l-8 border-transparent">
                <p className="text-sm font-semibold text-white">Overview</p>
              </div>
            </a>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Customers
