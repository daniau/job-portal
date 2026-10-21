'use client' // إجباري: الـ Error Boundary لازم يكون client component

import { useEffect } from 'react'

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error) // لاحقاً: أرسله لخدمة مراقبة أخطاء
  }, [error])

  return (
    <div role="alert" className="text-center py-20">
      <h2 className="text-xl font-bold">Something went wrong</h2>
      <p className="text-gray-500 mt-2">We couldn't load this page. Please try again.</p>
      <button onClick={() => unstable_retry()}>Try again</button>
    </div>
  )
}