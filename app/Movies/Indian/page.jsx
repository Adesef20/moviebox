import MovieSection from "@/components/MovieSection";

export default function IndianMovies() {
  return (
    <main className="bg-black min-h-screen text-white p-10">
      <MovieSection title="Indian Movies" endpoint="Indian/movie/week" />
    </main>
  );
}
