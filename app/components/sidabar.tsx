'use client'

import { useState } from 'react'
import { Home, Inbox, Users, Settings, Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 text-white hover:bg-gray-700"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <div 
        className={`bg-gray-800 text-white h-full w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-40`}
      >
        <Link href="/" className="text-white flex items-center space-x-2 px-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span className="text-2xl font-extrabold">TicketPro</span>
        </Link>

        <nav>
          <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Home className="inline-block mr-2 w-5 h-5" /> Dashboard
          </Link>
          <Link href="/tickets" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Inbox className="inline-block mr-2 w-5 h-5" /> Tickets
          </Link>
          <Link href="/team" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Users className="inline-block mr-2 w-5 h-5" /> Team
          </Link>
          <Link href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Settings className="inline-block mr-2 w-5 h-5" /> Settings
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  )
}

