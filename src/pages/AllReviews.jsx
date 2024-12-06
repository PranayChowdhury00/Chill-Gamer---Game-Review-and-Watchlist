import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState({
    field: "rating", 
    order: "asc", 
  });
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    fetch("https://server-site-manger.vercel.app/addReview")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setFilteredReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

  const sortReviews = (field, order) => {
    const sortedReviews = [...filteredReviews].sort((a, b) => {
      if (field === "rating") {
        return order === "asc" ? a.rating - b.rating : b.rating - a.rating;
      } else if (field === "year") {
        return order === "asc" ? a.year - b.year : b.year - a.year;
      }
      return 0;
    });
    setFilteredReviews(sortedReviews);
  };

  const handleSortChange = (e) => {
    const [field, order] = e.target.value.split("-");
    setSortOption({ field, order });
    sortReviews(field, order);
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);

    if (genre === "all") {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((review) => review.genre === genre);
      setFilteredReviews(filtered);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-4">Loading reviews...</p>
      </div>
    );
  }

  const genres = ["all", ...new Set(reviews.map((review) => review.genre))];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-8">All Reviews</h1>

      <div className="flex justify-between mb-4 flex-col sm:flex-row">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <label className="text-lg">Filter by Genre:</label>
          <select
            onChange={handleGenreChange}
            value={selectedGenre}
            className="select select-bordered w-full sm:w-48"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <select
          onChange={handleSortChange}
          className="select select-bordered w-full sm:w-48"
          value={`${sortOption.field}-${sortOption.order}`}
        >
          <option value="rating-asc">Rating: Low to High</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="year-asc">Year: Oldest to Newest</option>
          <option value="year-desc">Year: Newest to Oldest</option>
        </select>
      </div>

      {filteredReviews.length === 0 ? (
        <p>No reviews found. Please try again later.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredReviews.map((review) => (
            <div key={review._id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={review.gameCover || "/path/to/placeholder-image.jpg"}
                  alt={review.gameTitle}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">{review.gameTitle}</h3>
                <p>
                  <strong>Rating:</strong> {review.rating}
                </p>
                <p>
                  <strong>Genre:</strong> {review.genre}
                </p>
                <p className="text-gray-500">
                  <strong>Year:</strong> {review.year}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/reviewsDetails/${review._id}`}
                    className="btn btn-primary"
                  >
                    Explore Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;
