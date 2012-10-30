package lka.wine.dao;

import java.math.BigDecimal;

public class WineSummary {
	private int wineId;
	private int vintageYear;
	private String wineDescription; 
	private BigDecimal listPrice; 
	private String vineyard;
	private String brandName; 
	private String varietal;
	private String region;
	private String subRegion; 
	private String pricePer;
	private BigDecimal minPrice; 
	private BigDecimal avgPrice;
	private BigDecimal maxPrice;
	private int qty;
	private int qtyOnHand;
	public int getWineId() {
		return wineId;
	}
	public void setWineId(int wineId) {
		this.wineId = wineId;
	}
	public int getVintageYear() {
		return vintageYear;
	}
	public void setVintageYear(int vintageYear) {
		this.vintageYear = vintageYear;
	}
	public String getWineDescription() {
		return wineDescription;
	}
	public void setWineDescription(String wineDescription) {
		this.wineDescription = wineDescription;
	}
	public BigDecimal getListPrice() {
		return listPrice;
	}
	public void setListPrice(BigDecimal listPrice) {
		this.listPrice = listPrice;
	}
	public String getVineyard() {
		return vineyard;
	}
	public void setVineyard(String vineyard) {
		this.vineyard = vineyard;
	}
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public String getVarietal() {
		return varietal;
	}
	public void setVarietal(String varietal) {
		this.varietal = varietal;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getSubRegion() {
		return subRegion;
	}
	public void setSubRegion(String subRegion) {
		this.subRegion = subRegion;
	}
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
	
}
