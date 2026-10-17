import { useState } from 'react'

interface ListingProps {
  caption: string
  code: string
}

export function Listing({ caption, code }: ListingProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard access is optional; the listing remains selectable.
    }
  }

  return (
    <figure className="listing">
      <div className="listing-header">
        <figcaption>{caption}</figcaption>
        <button type="button" className="copy-button" onClick={copy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </figure>
  )
}
