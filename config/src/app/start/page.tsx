"use client"

import { useRouter } from 'next/navigation'
import { Screen } from '@/components/Screen'

export default function StartPage() {
  const router = useRouter()

  const handleStart = () => {
    router.push('/login')
  }

  return (
    <div onClick={handleStart} className="cursor-pointer">
      <Screen />
    </div>
  )
} 