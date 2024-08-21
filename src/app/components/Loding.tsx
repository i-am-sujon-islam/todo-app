const Loding = () => {
  return (
    <div
      className="min-h-screen bg-black text-white flex items-center
    justify-center
    "
    >
      <p className="text-xl flex items-center gap-2">
        <span
          className="w-10 h-10 rounded-full bg-transparent border-4 border-white inline-flex
        relative"
        />
        <span
          className="w-10 h-10 absolute bottom-4 border-r-green-600
        rounded-full animate-spin"
        />
        Todo app is loading
      </p>
    </div>
  );
};

export default Loding;
