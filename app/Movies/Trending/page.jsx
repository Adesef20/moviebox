import MovieSection from "@/components/MovieSection";

export default function TrendingMovies() {
  return (
    <main className="bg-black min-h-screen text-white p-10">
      <MovieSection title="Trending Movies" endpoint="trending/movie/week" />
    </main>
  );
}
