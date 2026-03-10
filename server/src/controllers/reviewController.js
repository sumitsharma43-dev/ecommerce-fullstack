// reviewController.js

const reviews = [];

// Create a review
const createReview = (productId, review) => {
    review.id = reviews.length + 1; // Simple ID assignment
    review.productId = productId;
    reviews.push(review);
    return review;
};

// Get reviews by product
const getReviewsByProduct = (productId) => {
    return reviews.filter(review => review.productId === productId);
};

// Update a review
const updateReview = (reviewId, updatedReview) => {
    const index = reviews.findIndex(review => review.id === reviewId);
    if (index !== -1) {
        reviews[index] = { ...reviews[index], ...updatedReview };
        return reviews[index];
    }
    return null;
};

// Delete a review
const deleteReview = (reviewId) => {
    const index = reviews.findIndex(review => review.id === reviewId);
    if (index !== -1) {
        return reviews.splice(index, 1);
    }
    return null;
};

module.exports = { createReview, getReviewsByProduct, updateReview, deleteReview };