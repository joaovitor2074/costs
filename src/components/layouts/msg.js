import { useState, useEffect } from "react"
import styles from "./msg.module.css"

export default function Message({ type = "success", msg = "", duration = 3000 }) {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const fadeMs = 280 // deve bater com a transição em CSS

  useEffect(() => {
    let hideTimer
    let unmountTimer

    if (!msg) {
      // se não tiver mensagem, dispara o hide e desmonta depois do fade
      setVisible(false)
      unmountTimer = setTimeout(() => setMounted(false), fadeMs)
      return () => {
        clearTimeout(unmountTimer)
      }
    }

    // mensagem nova: monta, espera um frame e mostra (para a transição)
    setMounted(true)
    requestAnimationFrame(() => setVisible(true))

    // depois do tempo, oculta (com animação) e desmonta após fade
    hideTimer = setTimeout(() => {
      setVisible(false)
      unmountTimer = setTimeout(() => setMounted(false), fadeMs)
    }, duration)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(unmountTimer)
    }
  }, [msg, duration])

  const handleClose = () => {
    setVisible(false)
    setTimeout(() => setMounted(false), fadeMs)
  }

  if (!mounted) return null

  return (
    <div
      className={`${styles.message} ${styles[type]} ${visible ? styles.show : styles.hide}`}
      role="status"
      aria-live="polite"
    >
      <span className={styles.text}>{msg}</span>
      <button className={styles.close} onClick={handleClose} aria-label="Fechar mensagem">✕</button>
    </div>
  )
}
