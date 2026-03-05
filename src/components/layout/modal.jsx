import { css } from '../../../styled-system/css'
import { createSignal, Show, createEffect, onCleanup } from "solid-js"
import { Portal } from "solid-js/web"
import { AiOutlineClose } from 'solid-icons/ai'

const [modalContent, setModalContent] = createSignal(null)

export const openModal = (content) => {
    setModalContent(() => content)
}

export const closeModal = () => {
    setModalContent(null)
}

export const Modal = () => {
    let modalRef;

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeModal()

        if (e.key === 'Tab' && modalRef) {
            const focusable = modalRef.querySelectorAll(
                'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
            )
            const first = focusable[0]
            const last = focusable[focusable.length - 1]

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault()
                    last?.focus()
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault()
                    first?.focus()
                }
            }
        }
    }

    createEffect(() => {
        if (typeof document === 'undefined') return
        if (modalContent()) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
            // Focus the modal after render
            requestAnimationFrame(() => {
                const focusable = modalRef?.querySelectorAll(
                    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                )
                focusable?.[0]?.focus()
            })
        } else {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    })

    onCleanup(() => {
        if (typeof document === 'undefined') return
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
    })

    return (
        <Show when={modalContent()}>
            <Portal>
                {/* Backdrop */}
                <div
                    onClick={closeModal}
                    className={css({
                        position: 'fixed',
                        inset: 0,
                        bg: 'bg/80',
                        zIndex: 9998,
                        animation: 'tooltipIn 0.15s ease-out',
                        backdropFilter: 'blur(4px)',
                    })}
                />
                {/* Modal */}
                <div
                    className={css({
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        padding: '1rem',
                    })}
                >
                    <div
                        ref={(el) => modalRef = el}
                        onClick={(e) => e.stopPropagation()}
                        className={css({
                            pointerEvents: 'auto',
                            bg: 'surface',
                            borderRadius: '20px',
                            border: '1px solid',
                            borderColor: 'faint',
                            boxShadow: 'lg',
                            width: '100%',
                            maxWidth: '500px',
                            maxHeight: '80vh',
                            overflow: 'auto',
                            animation: 'modalIn 0.2s ease-out',
                        })}
                    >
                        {/* Close button */}
                        <div className={css({
                            display: 'flex',
                            justifyContent: 'flex-end',
                            paddingRight: '1rem',
                            paddingTop: '1rem',
                        })}>
                            <button
                                onClick={closeModal}
                                className={css({
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '2rem',
                                    height: '2rem',
                                    borderRadius: '8px',
                                    color: 'muted',
                                    cursor: 'pointer',
                                    border: 'none',
                                    bg: 'transparent',
                                    _hover: {
                                        bg: 'hover',
                                        color: 'text',
                                    },
                                    transitionDuration: '150ms',
                                })}
                            >
                                <AiOutlineClose />
                            </button>
                        </div>
                        {/* Content */}
                        {modalContent()}
                    </div>
                </div>
            </Portal>
        </Show>
    )
}