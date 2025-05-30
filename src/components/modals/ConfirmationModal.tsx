import {motion} from 'motion/react'

type ConfirmationModalProps = {
    message: string
    agreeAction: () => void
    cancelAction: () => void
}

export default function ConfirmationModal({
    message,
    agreeAction,
    cancelAction,
}: ConfirmationModalProps) {
    const clickOnAgree = () => {
        agreeAction()
    }

    const clickOnCancel = () => {
        cancelAction()
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-full modal-main-bg">
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
                transition={{type: 'tween', delay: 0}}
                className="flex flex-col bg-sky-800 font-semibold p-10 rounded-xl">
                <h3 className="text-center mb-10">{message}</h3>
                <div className="flex w-72 justify-between">
                    <button
                        className="p-3 text-center bg-sky-500 w-32 rounded-lg"
                        onClick={clickOnAgree}>
                        Confirmar
                    </button>
                    <button
                        className="p-3 text-center bg-sky-500 w-32 rounded-lg"
                        onClick={clickOnCancel}>
                        Cancelar
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}
