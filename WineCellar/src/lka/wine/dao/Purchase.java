package lka.wine.dao;

import java.math.BigDecimal;
import java.util.Date;

public class Purchase {
	private int purchaseId;
	private int wineId;
	private Date purchateDate;
	private BigDecimal price;
	private String pricePer;
	private int qtyPurchaced;
	private String priceNotes;
	private int bottlesOnHand;
	private String invLocation;
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
	public Date getPurchateDate() {
		return purchateDate;
	}
	public void setPurchateDate(Date purchateDate) {
		this.purchateDate = purchateDate;
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
	public int getQtyPurchaced() {
		return qtyPurchaced;
	}
	public void setQtyPurchaced(int qtyPurchaced) {
		this.qtyPurchaced = qtyPurchaced;
	}
	public String getPriceNotes() {
		return priceNotes;
	}
	public void setPriceNotes(String priceNotes) {
		this.priceNotes = priceNotes;
	}
	public int getBottlesOnHand() {
		return bottlesOnHand;
	}
	public void setBottlesOnHand(int bottlesOnHand) {
		this.bottlesOnHand = bottlesOnHand;
	}
	public String getInvLocation() {
		return invLocation;
	}
	public void setInvLocation(String invLocation) {
		this.invLocation = invLocation;
	}
	
}
