const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-12 w-12"></div>
    </div>
  );
};

export default LoadingScreen;
