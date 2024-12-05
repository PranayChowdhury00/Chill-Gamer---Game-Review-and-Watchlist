import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyReviews = () => {
  const { user } = useContext(AuthContext); 
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      toast.error("User not logged in");
      return;
    }
    const email = user.email;

   
    fetch(`http://localhost:5000/myReviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user reviews:", error);
        toast.error("Could not load your reviews!");
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-10">
        You have not added any reviews yet.
      </div>
    );
  }

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/myReviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setReviews(reviews.filter((review) => review._id !== id));
          toast.success("Review deleted successfully");
        } else {
          toast.error("Could not delete the review!");
        }
      })
      .catch((error) => {
        console.error("Error deleting review:", error);
        toast.error("Something went wrong while deleting the review!");
      });
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={review.gameCover}
                alt={review.gameTitle}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{review.gameTitle}</h2>
              <p className="text-sm text-gray-600">Genre: {review.genre}</p>
              <p className="text-sm text-gray-600">Year: {review.year}</p>
              <p className="my-2">{review.review}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Rating: {review.rating}/5</span>
                <span className="text-sm text-gray-500">{review.userName}</span>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => navigate(`/updateReview/${review._id}`)}
                  className="btn btn-success"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn bg-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
