const posts = [
  { id: 1, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop' },
  { id: 2, url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop' },
  { id: 3, url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop' },
  { id: 4, url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop' },
  { id: 5, url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop' },
  { id: 6, url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=400&fit=crop' },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-on-surface-variant/60 block mb-4 italic">@sineshair</span>
        <h3 className="font-serif text-3xl">Follow our Journey</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-stretch">
        {posts.map((post) => (
          <a 
            key={post.id}
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="aspect-square overflow-hidden group relative"
          >
            <img 
              src={post.url} 
              alt={`Instagram post ${post.id}`} 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        ))}
      </div>
    </section>
  );
}
