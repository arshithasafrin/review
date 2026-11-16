import { useEffect, useState } from "react"
import { EVENTS, track } from "../lib/analytics"
import { whatsappHref } from "../lib/config"

export function WhatsAppLink({ source, className = "", children }) {
  const [href, setHref] = useState("#")

  useEffect(() => {
    setHref(whatsappHref())
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track(EVENTS.WHATSAPP, { source })}
    >
      {children}
    </a>
  )
}
