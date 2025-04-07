import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const BlogDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const q = query(collection(db, "articles"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setArticle(querySnapshot.docs[0].data());
      }
    };

    fetchArticle();
  }, [slug]);

  if (!article) {
    return <h1 className="text-center text-red-500">Artikel tidak ditemukan 😢</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <img src={article.image} alt={article.title} className="w-full mt-4 rounded-lg" />
      <p className="mt-4 text-gray-700">{article.content}</p>
    </div>
  );
};

export default BlogDetail;
