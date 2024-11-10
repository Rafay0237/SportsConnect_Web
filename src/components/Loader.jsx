const Loader = ({ variant = "default", size = 4 }) => {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`animate-spin rounded-full h-${size} w-${size} border-t-4 border-b-4 ${variant !== "ghost" ? "border-gray-900" : ""}`}
        ></div>
      </div>
    );
  };
  
  export default Loader;
  