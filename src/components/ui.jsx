export function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  }
  switch (name) {
    case "star":
      return (
        <svg {...common}>
          <path d="M12 3.4 14.5 9l5.8.5-4.4 3.8 1.4 5.6L12 16.2 6.7 18.9 8.1 13.3 3.7 9.5 9.5 9 12 3.4Z" />
        </svg>
      )
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4.5l3 2" />
        </svg>
      )
    case "megaphone":
      return (
        <svg {...common}>
          <path d="M4 10v4l10 3V7L4 10Z" />
          <path d="M14 9.5c2 .6 3.5 1.4 3.5 2.5S16 14 14 14.6" />
          <path d="M7 14.5V18a2 2 0 0 0 2 2h.5" />
        </svg>
      )
    case "eye":
      return (
        <svg {...common}>
          <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
          <circle cx="12" cy="12" r="2.4" />
        </svg>
      )
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
          <circle cx="12" cy="11" r="1.8" />
        </svg>
      )
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3.5 19 6.2v5.4c0 4.2-2.8 7.2-7 8.9-4.2-1.7-7-4.7-7-8.9V6.2L12 3.5Z" />
          <path d="M9 12.2 11 14l4-4.2" />
        </svg>
      )
    case "store":
      return (
        <svg {...common}>
          <path d="M4 10 6 4.5h12L20 10" />
          <path d="M4 10h16v9H4v-9Z" />
          <path d="M9 19v-5h6v5" />
        </svg>
      )
    case "qr":
      return (
        <svg {...common}>
          <path d="M5 5h5v5H5V5Zm9 0h5v5h-5V5ZM5 14h5v5H5v-5Z" />
          <path d="M14 14h2v2h-2v-2Zm3 0h2v5h-5v-2h3v-3Z" />
        </svg>
      )
    case "pen":
      return (
        <svg {...common}>
          <path d="M4 20h4l10-10-4-4L4 16v4Z" />
          <path d="m12.5 7.5 4 4" />
        </svg>
      )
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19h16" />
          <path d="M7 16V9M12 16V5M17 16v-4" />
        </svg>
      )
    case "utensils":
      return (
        <svg {...common}>
          <path d="M7 3v7a2 2 0 0 0 2 2H9M9 3v18M16 3c1.8 2 2.5 4 2.5 6.5S16 14 16 14v7" />
        </svg>
      )
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" />
          <path d="M4.5 19c.6-2.6 2.4-4 4.5-4s3.9 1.4 4.5 4" />
          <circle cx="17" cy="9.5" r="2.2" />
          <path d="M16 15c1.6.3 2.8 1.3 3.4 3" />
        </svg>
      )
    case "hourglass":
      return (
        <svg {...common}>
          <path d="M7 4h10M7 20h10M8 4c0 4 8 4 8 8s-8 4-8 8M16 4c0 4-8 4-8 8s8 4 8 8" />
        </svg>
      )
    case "bag":
      return (
        <svg {...common}>
          <path d="M6 8h12l-1 12H7L6 8Z" />
          <path d="M9 8V7a3 3 0 0 1 6 0v1" />
        </svg>
      )
    case "sofa":
      return (
        <svg {...common}>
          <path d="M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
          <path d="M4 12h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z" />
          <path d="M4 17v2M20 17v2" />
        </svg>
      )
    case "tag":
      return (
        <svg {...common}>
          <path d="M4 12V5h7l9 9-7 7-9-9Z" />
          <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case "video":
      return (
        <svg {...common}>
          <rect x="3.5" y="6" width="12" height="12" rx="2" />
          <path d="m15.5 10 5-2.5v9L15.5 14" />
        </svg>
      )
    case "camera":
      return (
        <svg {...common}>
          <path d="M8 7 9.2 5h5.6L16 7h3.5v12h-15V7H8Z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      )
    case "building":
      return (
        <svg {...common}>
          <path d="M5 20V5.5L12 3l7 2.5V20" />
          <path d="M9 20v-4h6v4M9 9h.01M12 9h.01M15 9h.01M9 12h.01M12 12h.01M15 12h.01" />
        </svg>
      )
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      )
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12.5 4.2 4.2L19 7.5" />
        </svg>
      )
    case "bell":
      return (
        <svg {...common}>
          <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5L6 16Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
      )
    case "arrow":
      return (
        <svg {...common} className={className}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    default:
      return null
  }
}

export function IconTile({ name }) {
  return (
    <span className="icon-tile">
      <Icon name={name} className="h-6 w-6" />
    </span>
  )
}

export function Arrow() {
  return <Icon name="arrow" className="h-4 w-4" />
}

export function Button({
  variant = "primary",
  className = "",
  children,
  arrow = true,
  href,
  ...props
}) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : variant === "line" ? "btn-line" : "btn-secondary"} ${className}`
  const content = (
    <>
      {children}
      {arrow ? <Arrow /> : null}
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button type={props.type || "button"} className={cls} {...props}>
      {content}
    </button>
  )
}

export function SectionHeading({ eyebrow, title, children, center = false, id }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#4843b3]">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.035em] text-navy sm:text-4xl lg:text-[2.7rem] lg:leading-[1.12]">
        {title}
      </h2>
      {children ? <div className="mt-4 text-base leading-relaxed text-ink sm:text-lg">{children}</div> : null}
    </div>
  )
}

export function SampleBadge({ className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-[#f4eeff] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#4843b3] ${className}`}>
      Sample data
    </span>
  )
}
