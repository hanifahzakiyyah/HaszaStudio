import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      const articlesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setArticles(articlesList);
    };

    fetchArticles();
  }, []);

  return (
    <div
        className="w-full min-h-screen mx-auto px-4 py-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-blog.webp')" }}
    >


      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-500/30 backdrop-blur-sm border border-gray-400 text-gray-300 shadow-md rounded-3xl overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-300 text-sm mt-2">
                {article.content.substring(0, 100)}...
              </p>
              <Link
                to={`/blog/${article.slug}`}
                className="text-blue-300 hover:underline mt-3 inline-block"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
