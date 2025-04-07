import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

export default function BukuTamu() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [daftarPesan, setDaftarPesan] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim()) {
      alert("kok kosong? diisi dulu yaa 😊");
      return
    };
    setLoading(true);
    try {
      await addDoc(collection(db, "bukuTamu"), {
        nama,
        pesan,
        createdAt: serverTimestamp(),
      });
      setNama("");
      setPesan("");
      fetchData();

    } catch (error) {
        console.error("Error: ", error);
        alert("Gagal mengirim, coba lagi.");
    }
    setLoading(false);
  };

  const fetchData = async () => {
    const q = query(collection(db, "bukuTamu"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const pesanList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDaftarPesan(pesanList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatTanggal = (timestamp) => {
    if (!timestamp) return "Tanggal tidak tersedia";
    const date = timestamp.toDate();
    return date.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
  };

  return (
    <section className="py-8 px-4 lg:py-20 lg:px-8 max-w-7xl m-auto font-monos flex justify-center flex-col lg:flex-row border border-slate-500 backdrop-blur-sm rounded-3xl mt-14 mx-5 lg:mx-auto" id="chat">
      {/* Form input doa */}
      <form onSubmit={handleSubmit} className="lg:max-w-[40vw] mx-4 p-4 border border-slate-600 text-slate-300 rounded-lg shadow-lg bg-slate-700/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4">Tulis Pesan</h2>
          <input
              type="text"
              placeholder="Nama..."
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="border p-2 w-full bg-slate-300/10 border-slate-500 rounded"
          />
          <textarea
              placeholder="Tulis pesan..."
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="border p-2 w-full rounded bg-slate-300/10 border-slate-500 mt-2"
          ></textarea>
          <button 
              type="submit" 
              disabled={loading} 
              className="w-full p-2 bg-slate-300/50 text-slate-100 border rounded disabled:bg-gray-400"
          >
              {loading ? "Mengirim..." : "Kirim"}
          </button>
      </form>

      <div className="mt-6 lg:mt-0 max-h-[50vh] min-w-[40vw] mx-4 overflow-y-scroll">
        {/* List doa yang sudah dikirim */}
        {daftarPesan.map((item) => (<>
            <div key={item.id} className="flex items-start gap-3 p-1 pt-3 rounded-3xl backdrop-blur-sm mb-3">
                {/* Kotak inisial nama */}
                <div className="w-10 h-10 flex items-center justify-center bg-slate-300/50 backdrop-blur-sm text-slate-100 font-bold rounded-md flex-shrink-0">
                    {item.nama.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 ">
                    <p className="text-slate-100">{item.nama}</p>
                    <p className="text-slate-300">{item.pesan}</p>
                    <p className="text-sm text-slate-500">{formatTanggal(item.createdAt)}</p>
                </div>
            </div><hr /></>
        ))}
    </div>
    </section>
  );

    
}
