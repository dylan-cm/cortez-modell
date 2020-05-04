import React, { useState, useEffect, useRef } from 'react'

/**
 * Animated Cursor
 * Replaces the native cursor with a custom animated cursor.
 *
 * @author Stephen Scaff
 */
function AnimatedCursor({ dotSize = 480, dotScale = 1 }) {
  const cursorOutline = useRef()
  const requestRef = useRef()
  const previousTimeRef = useRef()
  const [width] = useState(window.innerWidth)
  const [height] = useState(window.innerHeight)
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  let cursorEnlarged = useState(false)

  const WhoDis = (() => {
    if (typeof navigator == 'undefined') return

    let ua = navigator.userAgent

    return {
      info: ua,

      Android() {
        return ua.match(/Android/i)
      },
      BlackBerry() {
        return ua.match(/BlackBerry/i)
      },
      IEMobile() {
        return ua.match(/IEMobile/i)
      },
      iOS() {
        return ua.match(/iPhone|iPad|iPod/i)
      },
      OperaMini() {
        return ua.match(/Opera Mini/i)
      },

      /**
       * Any Mobile
       */
      anyMobile() {
        return WhoDis.Android() || WhoDis.BlackBerry() || WhoDis.iOS() || WhoDis.OperaMini() || WhoDis.IEMobile()
      },
    }
  })()

  const styles = {
    zIndex: -999,
    pointerEvents: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    transform: 'translate(-25%, -45%)',
    width: dotSize,
    height: dotSize,
    background: 'radial-gradient(circle at center, #F3B7AC 5%, transparent 50%)',
  }

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
    if (typeof navigator !== 'undefined' && WhoDis.anyMobile() && window.pageYOffset > 0.5) return () => <></>

    document.addEventListener('mousemove', onMouseMove)
    requestRef.current = requestAnimationFrame(animateDotOutline)
    handleLinkEvents()

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
   * Handle Links Events
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
   */
  function handleLinkEvents() {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('mouseover', () => {
        cursorEnlarged.current = true
      })
      el.addEventListener('mouseout', () => {
        cursorEnlarged.current = false
      })
    })
  }

  /**
   * Animate Dot Outline
   * Aniamtes cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = (time) => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8
      y += (endY - y) / 8
      cursorOutline.current.style.top = y + 'px'
      cursorOutline.current.style.left = x + 'px'
    }
    previousTimeRef.current = 0
    requestRef.current = requestAnimationFrame(animateDotOutline)
  }

  return <div ref={cursorOutline} id="cursor-outline" style={{ ...styles }} />
}

export default AnimatedCursor
