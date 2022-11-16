import React, { ReactElement } from 'react'

export default function Modal({ children }: ModalProps) {
    return <div className='modal-overlay'>
        <div className='modal-container'>
            <div className='modal-header'>

            </div>
            <div className='modal-body'>
                {children}
            </div>
            <div className='modal-footer'>

            </div>
        </div>
    </div>
}

type ModalProps = {
    header?: ReactElement | string;
    children: ReactElement | string;
    footer?: ReactElement | string
}