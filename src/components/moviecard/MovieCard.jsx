const MovieCard = (data) => {
  const imageUrl = `${process.env.REACT_APP_BASE_IMAGE_URL}/${data.movieData.poster_path}`;
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center shadow-md"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-4">
        <div className="mt-auto">
          <h2 className="text-lg font-semibold mb-2 text-left">
            {data.movieData.title}
          </h2>
          <p className="text-sm text-left">Deskripsi kartu atau teks lainnya.</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
