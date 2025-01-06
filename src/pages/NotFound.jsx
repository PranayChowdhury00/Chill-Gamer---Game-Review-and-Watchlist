import { useLottie } from 'lottie-react';
import img from '../assets/404.json';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const options = {
    animationData: img,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="hero min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-20">
      {/* Animation Section */}
      <div className="w-full max-w-md lg:max-w-lg">{View}</div>

      {/* Text Section */}
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-5xl font-bold text-primary">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          Sorry, the page you're looking for doesn't exist. It may have been moved, or the URL might be incorrect.
        </p>
        <button
          onClick={goToHome}
          className="btn btn-primary btn-lg mt-6 px-10 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 hover:bg-secondary hover:text-white"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
