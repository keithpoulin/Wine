package lka.wine.dao;

import java.math.BigDecimal;
import java.util.Date;

public class PurchaseDetail {
	private int purchaseId;
	private int wineId;
	private Date purchaseDate;
	private BigDecimal price;
	private String pricePer;
	private int qtyPurchased;
	private String priceNotes;
	private int qtyOnHand;
	private String invLocation;
	private int locationId;
	private Location location;
	
	public int getPurchaseId() {
		return purchaseId;
	}
	public void setPurchaseId(int purchaseId) {
		this.purchaseId = purchaseId;
	}
	public int getWineId() {
		return wineId;
	}
	public void setWineId(int wineId) {
		this.wineId = wineId;
	}
	public Date getPurchaseDate() {
		return purchaseDate;
	}
	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getPricePer() {
		return pricePer;
	}
	public void setPricePer(String pricePer) {
		this.pricePer = pricePer;
	}
	public int getQtyPurchased() {
		return qtyPurchased;
	}
	public void setQtyPurchased(int qtyPurchased) {
		this.qtyPurchased = qtyPurchased;
	}
	public String getPriceNotes() {
		return priceNotes;
	}
	public void setPriceNotes(String priceNotes) {
		this.priceNotes = priceNotes;
	}
	public int getQtyOnHand() {
		return qtyOnHand;
	}
	public void setQtyOnHand(int qtyOnHand) {
		this.qtyOnHand = qtyOnHand;
	}
	public String getInvLocation() {
		return invLocation;
	}
	public void setInvLocation(String invLocation) {
		this.invLocation = invLocation;
	}
	public int getLocationId() {
		return locationId;
	}
	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
}
