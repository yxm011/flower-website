import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const whatsappUrl = 'https://api.whatsapp.com/send/?phone=994702197070&text&type=phone_number&app_absent=0'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="WhatsApp ilə əlaqə"
    >
      <MessageCircle size={28} className="animate-pulse" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        WhatsApp ilə yazın
      </span>
    </a>
  )
}

export default WhatsAppButton
