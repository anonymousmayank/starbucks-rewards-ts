import React, { Fragment } from 'react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { Transition, Dialog } from '@headlessui/react';
interface Props {
    title?: String;
    description?: String;
    okButtonText?: String;
    cancelButtonText?: String;
    isOpen?: boolean;
    onClose: (open: boolean) => void;
}

const ConfirmationDialog: React.FC<Props> = ({ title, description, okButtonText, cancelButtonText, isOpen, onClose:setOpen }) => {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog open={isOpen} onClose={setOpen}>
                <Transition.Child
                as={Fragment}
                enter='transition-opacity duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-50'
                entered='opacity-50'
                leave='transition-opacity duration-300'
                leaveFrom='opacity-50'
                leaveTo='opacity-0'
                >
                    <Dialog.Overlay className="fixed inset-0 ease-in-out bg-black z-30"></Dialog.Overlay>
                </Transition.Child>
                <Transition.Child
                as={Fragment}
                enter='transition-transform duration-300'
                enterFrom='-translate-y-1/3'
                enterTo='translate-y-1/3'
                entered='translate-y-1/3'
                leave='transition-transform duration-300'
                leaveFrom='translate-y-1/3'
                leaveTo='-translate-y-1/3'
                >
                    <div className='absolute top-0 left-1/3 ease-in-out transform z-30 flex flex-col items-center justify-center rounded-md w-2/6 p-6 bg-white shadow-lg'>
                        <button onClick={
                            ()=>setOpen(false)
                        }><XIcon className='absolute top-5 right-4 h-4 w-4 text-gray-600'></XIcon></button>
                        <ExclamationIcon className="text-warning h-20 w-20"></ExclamationIcon>
                        {title && <h2 className='my-8 text-2xl font-semibold text-gray-600'>{title}</h2>}
                        {description && <p className="text-center text-gray-400 mb-8">{description}</p>}
                        <div className='flex w-full items-center justify-center text-white'>
                            <button className='w-1/4 h-10 mx-1.5 rounded-3 bg-gray-300'>{okButtonText}</button>
                            <button className='w-1/4 h-10 mx-1.5 rounded-3 bg-warning'>{cancelButtonText}</button>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    );
}
ConfirmationDialog.defaultProps = {
    title: 'Are you Sure',
    description: '',
    okButtonText: 'Ok',
    cancelButtonText: 'Cancel',
    isOpen: false,

}
export default React.memo(ConfirmationDialog);