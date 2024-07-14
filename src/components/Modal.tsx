import ContactForm from './ContactForm';

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
    onActionComplete: () => void;
};

const Modal = (props: Props) => {
    if (!props.open) return null;

    return (
        <div 
            onClick={props.onClose} 
            className='fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-25 z-50'
        >
            <div
                className='w-full max-w-lg mx-auto bg-white shadow-xl rounded overflow-hidden'
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-end p-2">
                    <button 
                        onClick={props.onClose}
                        className="text-white bg-slate-300 p-2 rounded hover:bg-slate-800"
                    >
                        X
                    </button>
                </div>
                <div className="p-4">
                    <ContactForm id={props.id} onActionComplete={props.onActionComplete} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
