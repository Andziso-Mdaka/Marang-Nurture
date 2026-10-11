import { BUSINESS } from '../config.js'

export const LogoMark = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <path d="M20 36V14M20 22c-6-1-10-6-10-12 6 0 10 5 10 12zM20 22c6-1 10-6 10-12-6 0-10 5-10 12zM20 14c-3-3-3-8 0-11 3 3 3 8 0 11zM20 30c-5 0-9-3-11-8 5 0 9 3 11 8zM20 30c5 0 9-3 11-8-5 0-9 3-11 8z" />
  </svg>
)

export const WhatsAppFloat = () => (
  <a className="wa-float" href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.1 1.2z" /></svg>
  </a>
)
