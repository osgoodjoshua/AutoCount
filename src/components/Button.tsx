
interface ButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, link, onClick }) => {
  return link ? (
    <a 
      href={link} 
      className="inline-block px-4 py-2 border-2 border-transparent rounded
      text-blue-900 bg-yellow-400 transition-colors duration-300 hover:text-black hover:border-black"
    >
      {text}
    </a>
  ) : (
    <button 
      onClick={onClick}
      className="inline-block px-4 py-2 border-2 border-transparent rounded
      text-blue-900 bg-yellow-400 transition-colors duration-300 hover:text-black hover:border-black"
    >
      {text}
    </button>
  );
};

export default Button;
