import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const ReviewDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://server-site-manger.vercel.app/addReview/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching review:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!review) {
    return <p className="text-center text-lg text-red-500">Review not found.</p>;
  }

  const handleAddToWatchlist = () => {
    fetch("https://server-site-manger.vercel.app/addToWatchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviewId: review._id,
        email: review.userEmail,
        username: review.userName,
        gameTitle: review.gameTitle,
        gameCover: review.gameCover,
        rating: review.rating,
        genre: review.genre,
        description: review.review,
        userId: user?.uid, 
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        
        navigate("/watchlist");
      })
      .catch((error) => console.error("Error adding to watchlist:", error));
  };

  return (
    <div className="flex flex-col  justify-center items-center p-4 bg-base-100">
      <h1 className="text-4xl font-bold mb-4">{review.title}</h1>
      <img
        src={review.gameCover || "No Img"}
        alt={review.gameTitle}
        className="w-96 h-96 object-cover"
      />
      <p>
        <strong>Game:</strong> {review.gameTitle}
      </p>
      <p>
        <strong>Rating:</strong> {review.rating}
      </p>
      <p>
        <strong>Description:</strong> {review.review}
      </p>
      <p>
        <strong>Genre:</strong> {review.genre}
      </p>
      <p>
        <strong>Reviewer:</strong> {review.userName}
      </p>
      <p>
        <strong>Email:</strong> {review.userEmail}
      </p>

      <button className="btn btn-primary mt-4" onClick={handleAddToWatchlist}>
        Add to Watchlist
      </button>
    </div>
  );
};

export default ReviewDetails;
