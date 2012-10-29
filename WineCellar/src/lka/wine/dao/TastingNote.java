package lka.wine.dao;

import java.util.Date;

public class TastingNote {
	private int tastingNoteId;
	private int wineId;
	private Date tastingDate;
	private String reviewedBy;
	private String review;
	private int rating;
	
	public int getTastingNoteId() {
		return tastingNoteId;
	}
	public void setTastingNoteId(int tastingNoteId) {
		this.tastingNoteId = tastingNoteId;
	}
	public int getWineId() {
		return wineId;
	}
	public void setWineId(int wineId) {
		this.wineId = wineId;
	}
	public Date getTastingDate() {
		return tastingDate;
	}
	public void setTastingDate(Date tastingDate) {
		this.tastingDate = tastingDate;
	}
	public String getReviewedBy() {
		return reviewedBy;
	}
	public void setReviewedBy(String reviewedBy) {
		this.reviewedBy = reviewedBy;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
}
