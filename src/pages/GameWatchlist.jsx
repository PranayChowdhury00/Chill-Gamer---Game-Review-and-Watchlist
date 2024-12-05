import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Lottie from "lottie-react";

const GameWatchlist = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    
    fetch("/loader.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);  
      })
      .catch((error) => {
        console.error("Error loading animation data:", error);
      });
  }, []);

  const { user, loader } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loader) return; 
    if (!user?.email) {
      setLoading(false); 
      return;
    }

   
    fetch(`http://localhost:5000/myWatchlist?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWatchlist(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching watchlist:", error);
        setLoading(false);
      });
  }, [user, loader]);

  if (loader || loading || !animationData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie animationData={animationData} loop={true} />
      </div>
    );
  }

  if (!user?.email) {
    return <div>Please log in to view your watchlist.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No items in your watchlist yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr>
                <th>Game Title</th>
                <th>Rating</th>
                <th>Genre</th>
                <th>Description</th>
                <th>Cover</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((item) => (
                <tr key={item._id}>
                  <td>{item.gameTitle}</td>
                  <td>{item.rating}</td>
                  <td>{item.genre}</td>
                  <td>{item.description}</td>
                  <td>
                    <img
                      src={item.gameCover || "No Image"}
                      alt={item.gameTitle}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GameWatchlist;
