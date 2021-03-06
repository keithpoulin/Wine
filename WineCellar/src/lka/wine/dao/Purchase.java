package lka.wine.dao;

import java.math.BigDecimal;
import java.util.Date;

public class Purchase extends AbstractDao {
	private int purchaseId;
	private int locationId;
	private int wineId;
	private Date purchaseDate;
	private BigDecimal price;
	private String pricePer;
	private int qtyPurchased;
	private String priceNotes;
	private int qtyOnHand;
	private String invLocation;
	
	public int getPurchaseId() {
		return purchaseId;
	}
	public void setPurchaseId(int purchaseId) {
		this.purchaseId = purchaseId;
	}
	public int getLocationId() {
		return locationId;
	}
	public void setLocationId(int locationId) {
		this.locationId = locationId;
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
	@Override
	public int getId() {
		return getPurchaseId();
	}
	@Override
	public void setId(int id) {
		setPurchaseId(id);
	}

}
