
interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a 
      href={link} 
      className="inline-block px-4 py-2 border-2 border-transparent rounded
       text-blue-900 bg-yellow-400 transition-colors duration-300 hover:text-black hover:border-black"
    >
      {text}
    </a>
  );
};

export default Button;
