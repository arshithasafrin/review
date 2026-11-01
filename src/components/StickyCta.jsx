import { useLead } from "./LeadForm"
import { Button } from "./ui"
import { WhatsAppLink } from "./WhatsAppLink"

export function StickyCta() {
  const { openDemo, dialogOpen } = useLead()
  if (dialogOpen) return null
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ece8f6] bg-white/90 p-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2">
        <Button className="w-full px-3" onClick={() => openDemo("sticky_mobile")}>
          Book Demo
        </Button>
        <WhatsAppLink source="sticky_mobile" className="btn btn-line w-full px-3">
          WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  )
}
