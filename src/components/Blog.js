import React from 'react';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Najboljih Vežbi za Početnike',
      author: 'Marko Petrović',
      date: '15. Decembar 2024',
      category: 'Vežbanje',
      image: '🏋️',
      excerpt: 'Ako ste novi u svetu fitnessa, ove vežbe će vam pomoći da počnete sigurno i efektivno. Naučite osnovne pokrete koji će vam izgraditi temelj za sve buduće treninge.',
      content: 'Počinjati fitness putovanje može biti zastrašujuće, ali sa pravim vežbama može biti i uzbudljivo. Ključ je u tome da počnete polako i građate snagu vremenom. Sklekovi, čučnjevi, planki i hip thrusts su savršene vežbe za početnike jer ciljaju više mišićnih grupa odjednom.'
    },
    {
      id: 2,
      title: 'Ishrana za Rast Mišića',
      author: 'Ana Jovanović',
      date: '12. Decembar 2024',
      category: 'Ishrana',
      image: '🥗',
      excerpt: 'Otkrijte koje namirnice su esencijalne za izgradnju mišića i kako da sastavite plan ishrane koji će vam pomoći da postignete svoje ciljeve.',
      content: 'Proteini su temelj izgradnje mišića, ali ne zaboravite na ugljene hidrate i zdrave masti. Kombinacija treniranja i pravilne ishrane je ključna za maksimalne rezultate. Ciljajte na 1.6-2.2g proteina po kilogramu telesne težine dnevno.'
    },
    {
      id: 3,
      title: 'Kardio vs. Trening Snage',
      author: 'Petar Nikolić',
      date: '10. Decembar 2024',
      category: 'Trening',
      image: '💪',
      excerpt: 'Koji tip treninga je bolji za vas? Poredimo kardio i trening snage da biste saznali šta vam više odgovara.',
      content: 'Oba tipa treninga imaju svoje prednosti. Kardio poboljšava zdravlje srca i sagoreva kalorije, dok trening snage gradi mišiće i ubrzava metabolizam. Najbolje rešenje je kombinacija oba pristupa.'
    },
    {
      id: 4,
      title: 'Importance Oporavka i Spavanja',
      author: 'Jovana Stojanović',
      date: '8. Decembar 2024',
      category: 'Oporavak',
      image: '😴',
      excerpt: 'Oporavak je podjednako važan kao i trening. Saznajte zašto je kvalitetan san ključan za vaš fitness napredak.',
      content: 'Tijekom sna vaše tijelo opravlja mišiće i oslobađa hormone rasta. Nedostatak sna može sprečiti napredak i povećati rizik od povreda. Ciljajte na 7-9 sati kvalitetnog sna svake noći.'
    },
    {
      id: 5,
      title: 'Motivacija za Trening',
      author: 'Milan Đorđević',
      date: '5. Decembar 2024',
      category: 'Psihologija',
      image: '🎯',
      excerpt: 'Kako da ostanete motivisani kada vam se ne treninguje? Ove strategije će vam pomoći da ostanete konzistentni.',
      content: 'Postavljanje jasnih ciljeva, praćenje napretka i pronalaženje trening partnera mogu značajno povećati vašu motivaciju. Zaboravite perfekcionizam - konzistentnost je važnija od savršenstva.'
    },
    {
      id: 6,
      title: 'Domaci Trening bez Opreme',
      author: 'Sara Milanović',
      date: '3. Decembar 2024',
      category: 'Vežbanje',
      image: '🏠',
      excerpt: 'Ne možete u teretanu? Bez problema! Evo kompletnog vodiča za efektivan trening kod kuće koristeći samo sopstvenu težinu tela.',
      content: 'Burpee, mountain climbers, jumping jacks i drugi bodyweight pokreti mogu biti izuzetno efektivni. Ključ je u intenzitetu i varijaciji. Ovi treningovi mogu biti jednako zahtevni kao i teretana.'
    }
  ];

  const [selectedPost, setSelectedPost] = React.useState(null);

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Fit Map Blog</h1>
        <p>Pronađite inspiraciju i savete za svoj fitness put</p>
      </div>

      {selectedPost ? (
        <div className="blog-post-detail">
          <button onClick={() => setSelectedPost(null)} className="back-button">
            ← Nazad na blog
          </button>
          <article className="post-article">
            <div className="post-header-detail">
              <span className="post-category">{selectedPost.category}</span>
              <h2>{selectedPost.title}</h2>
              <div className="post-meta">
                <span>👤 {selectedPost.author}</span>
                <span>📅 {selectedPost.date}</span>
              </div>
            </div>
            <div className="post-image-large">{selectedPost.image}</div>
            <div className="post-content">
              <p className="post-excerpt-large">{selectedPost.excerpt}</p>
              <p>{selectedPost.content}</p>
            </div>
          </article>
        </div>
      ) : (
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-post"
              onClick={() => setSelectedPost(post)}
            >
              <div className="post-image">{post.image}</div>
              <div className="post-content-preview">
                <span className="post-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span>👤 {post.author}</span>
                  <span>📅 {post.date}</span>
                </div>
                <button className="read-more">Pročitaj više →</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;

