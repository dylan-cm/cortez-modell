import React, { useState, useEffect, useRef } from 'react'

const WhoDis = (() => {
  if (typeof navigator == 'undefined') return

  let ua = navigator.userAgent

  return {
    info: ua,

    Android: () => ua.match(/Android/i),
    BlackBerry: () => ua.match(/BlackBerry/i),
    IEMobile: () => ua.match(/IEMobile/i),
    iOS: () => ua.match(/iPhone|iPad|iPod/i),
    OperaMini: () => ua.match(/Opera Mini/i),

    /**
     * Any Mobile
     */
    anyMobile: () => WhoDis.Android() || WhoDis.BlackBerry() || WhoDis.iOS() || WhoDis.OperaMini() || WhoDis.IEMobile(),
  }
})()

/**
 * Animated Cursor
 * Replaces the native cursor with a custom animated cursor.
 *
 * @author Stephen Scaff
 */
function AnimatedCursor() {
  const cursorOutline = useRef()
  const requestRef = useRef()
  const [width] = useState(window.innerWidth)
  const [height] = useState(window.innerHeight)
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const dotSize = 480

  // Mouse Events
  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x, y })
    positionDot(event)
  }

  /**
   * Hooks
   */
  useEffect(() => {
    // Bail if mobile
    if (typeof navigator !== 'undefined' && WhoDis.anyMobile()) return () => <></>

    document.addEventListener('mousemove', onMouseMove)
    requestRef.current = requestAnimationFrame(animateDotOutline)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(requestRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let { x, y } = mousePosition
  const winDimensions = { width, height }
  let endX = winDimensions.width / 2
  let endY = winDimensions.height / 2

  /**
   * Position Dot (cursor)
   * @param {event}
   */
  function positionDot(e) {
    // Position the dot
    endX = e.pageX
    endY = e.pageY
  }

  /**
   * Animate Dot Outline
   * Aniamtes cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = () => {
    x += (endX - x) / 8
    y += (endY - y) / 8
    cursorOutline.current.style.top = y + 'px'
    cursorOutline.current.style.left = x + 'px'

    requestRef.current = requestAnimationFrame(animateDotOutline)
  }

  return (
    <div
      ref={cursorOutline}
      id="cursor-outline"
      style={{
        zIndex: -999,
        position: 'absolute',
        top: '50%',
        left: '50%',
        borderRadius: '50%',
        transform: 'translate(-25%, -45%)',
        width: dotSize,
        height: dotSize,
        background: 'radial-gradient(circle at center, #F3B7AC 5%, transparent 50%)',
      }}
    />
  )
}

export default AnimatedCursor
