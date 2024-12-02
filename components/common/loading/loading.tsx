
const Loading = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
