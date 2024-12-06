import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateReview = () => {
  const { id } = useParams(); 
  const [review, setReview] = useState(null);
  const [formData, setFormData] = useState({
    gameTitle: "",
    genre: "",
    year: "",
    review: "",
    rating: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    
    fetch(`https://server-site-manger.vercel.app/updateReview/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setReview(data);
          setFormData({
            gameTitle: data.gameTitle,
            genre: data.genre,
            year: data.year,
            review: data.review,
            rating: data.rating,
          });
        } else {
          toast.error("Review not found!");
        }
      })
      .catch(() => toast.error("Failed to load review!"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://server-site-manger.vercel.app/updateReview/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          navigate(`/myReviews`); 
        } else {
          toast.error(data.message);
        }
      })
      .catch(() => toast.error("Error updating review!"));
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">Update Review</h1>
      {review ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Game Title</label>
            <input
              type="text"
              name="gameTitle"
              value={formData.gameTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Review
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-500">Loading review...</p>
      )}
    </div>
  );
};

export default UpdateReview;
