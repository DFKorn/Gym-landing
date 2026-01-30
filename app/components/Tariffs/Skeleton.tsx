export default function Skeleton() {
  return (
    <div className="max-w-md mx-auto px-4 space-y-4 animate-pulse">
      <div className="h-12 bg-gray-700 rounded-xl" />
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-24 bg-gray-700 rounded-xl" />
      ))}
    </div>
  );
}
