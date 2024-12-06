import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddReview = () => {
  const { user, loader, setLoader } = useContext(AuthContext); 
  const [gameCover, setGameCover] = useState("");
  const [gameTitle, setGameTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [year, setYear] = useState(new Date());
  const [genre, setGenre] = useState("Action");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true); 

    const reviewData = {
      gameCover,
      gameTitle,
      review,
      rating,
      year: year.getFullYear(), 
      genre,
      userEmail: user.email,
      userName: user.displayName,
    };

    fetch("https://server-site-manger.vercel.app/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Review submitted successfully!");
        setGameCover("");
        setGameTitle("");
        setReview("");
        setRating(5);
        setYear(new Date());
        setGenre("Action");
        setLoader(false); 
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        toast.error("Failed to submit review!");
        setLoader(false); 
      });
  };

  
  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">Add a New Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Cover Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                className="input input-bordered"
                value={gameCover}
                onChange={(e) => setGameCover(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Game Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter game title"
                className="input input-bordered"
                value={gameTitle}
                onChange={(e) => setGameTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Review Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write your review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating (1-5)</span>
              </label>
              <input
                type="number"
                min="1"
                max="5"
                className="input input-bordered"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Publishing Year</span>
              </label>
              <DatePicker
                selected={year}
                onChange={(date) => setYear(date)}
                showYearPicker
                dateFormat="yyyy"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Genres</span>
              </label>
              <select
                className="select select-bordered"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
              >
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email (Read Only)</span>
              </label>
              <input
                type="text"
                value={user?.email || ""}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name (Read Only)</span>
              </label>
              <input
                type="text"
                value={user?.displayName || "Anonymous"}
                className="input input-bordered"
                readOnly
              />
            </div>

            <div className="form-control mt-4">
              <button className="btn btn-primary" type="submit">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
