import { css } from '../../../styled-system/css'
import { flex } from '../../../styled-system/patterns'
import { openModal, closeModal } from '../layout/modal'

import { createSignal, Show } from 'solid-js'

import { BasicButton } from '../ui/basicButton';

import { login } from '../../utils/loginAPI'

export const openLoginModal = (isAdmin, setIsAdmin) => {
    openModal(() => <LoginModalContent isAdmin={isAdmin} setIsAdmin={setIsAdmin} />)
}

const LoginModalContent = (props) => {

    const [username, setUsername] = createSignal("")
    const [password, setPassword] = createSignal("")
    const [error, setError] = createSignal("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username() || !password()) {
            setError("Please fill in all fields.")
            return
        }
        setError("")
        login(username(), password())
            .then((token) => {
                document.cookie = `token=${token.token}; path=/; secure; samesite=strict`
                props.setIsAdmin(true)
            })
            .catch((err) => {
                props.setIsAdmin(false)
                console.error("Failed to login:", err)
                setError("Invalid username or password.")
            })
        closeModal()
    }

    return (
        <>
            {/* Header */}
            <div className={flex({
                direction: 'row',
                align: 'center',
                gap: '2rem',
                paddingX: '1.5rem',
                paddingY: '1rem',
                paddingBottom: '1rem',
                color: 'muted'
            })}>
                <form onSubmit={handleSubmit}>
                    <Show when={!props.isAdmin()}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username()}
                        onInput={(e) => setUsername(e.target.value)}
                        className={css({
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            border: '1px solid',
                            borderColor: 'muted',
                            bg: 'bg',
                            color: 'text',
                            width: '100%',
                            marginBottom: '1rem',
                        })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password()}
                        onInput={(e) => setPassword(e.target.value)}
                        className={css({
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            border: '1px solid',
                            borderColor: 'muted',
                            bg: 'bg',
                            width: '100%',
                            color: 'text',
                            marginBottom: '1rem',
                        })}
                    />
                    {error() && <p className={css({ color: 'accent.orange/70', marginBottom: '1rem' })}>{error()}</p>}
                    </Show>
                    <Show when={!props.isAdmin()}>
                        
                        <BasicButton type="submit" children="Login" />
                    </Show>
                    <Show when={props.isAdmin()}>
                        <p> Logged in as admin</p>
                        <BasicButton children="Logout" onClick={() => {
                            document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
                            props.setIsAdmin(false)
                            closeModal()
                        }} />
                    </Show>
                    
                </form>
            </div>
        </>
    )
}