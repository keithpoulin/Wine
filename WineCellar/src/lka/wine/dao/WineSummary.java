package lka.wine.dao;

import java.math.BigDecimal;

public class WineSummary extends Wine {

	private String pricePer;
	private BigDecimal minPrice; 
	private BigDecimal avgPrice;
	private BigDecimal maxPrice;
	private int qty;
	private int qtyOnHand;
	private int minRating; 
	private BigDecimal avgRating;
	private int maxRating;
	
	public String getPricePer() {
		return pricePer;
	}
	public void setPricePer(String pricePer) {
		this.pricePer = pricePer;
	}
	public BigDecimal getMinPrice() {
		return minPrice;
	}
	public void setMinPrice(BigDecimal minPrice) {
		this.minPrice = minPrice;
	}
	public BigDecimal getAvgPrice() {
		return avgPrice;
	}
	public void setAvgPrice(BigDecimal avgPrice) {
		this.avgPrice = avgPrice;
	}
	public BigDecimal getMaxPrice() {
		return maxPrice;
	}
	public void setMaxPrice(BigDecimal maxPrice) {
		this.maxPrice = maxPrice;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public int getQtyOnHand() {
		return qtyOnHand;
	}
	public void setQtyOnHand(int qtyOnHand) {
		this.qtyOnHand = qtyOnHand;
	}
	public int getMinRating() {
		return minRating;
	}
	public void setMinRating(int minRating) {
		this.minRating = minRating;
	}
	public BigDecimal getAvgRating() {
		return avgRating;
	}
	public void setAvgRating(BigDecimal avgRating) {
		this.avgRating = avgRating;
	}
	public int getMaxRating() {
		return maxRating;
	}
	public void setMaxRating(int maxRating) {
		this.maxRating = maxRating;
	}
	
}
