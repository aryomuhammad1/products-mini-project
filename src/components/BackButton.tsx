import { useNavigate } from 'react-router-dom';

type BackButtonProps = { children: React.ReactNode };

const BackButton = ({ children }: BackButtonProps) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="text-blue-500 hover:underline mb-4 block cursor-pointer">
            ← {children}
        </button>
    );
};

export default BackButton;
