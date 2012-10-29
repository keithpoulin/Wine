package lka.wine.dao;

import java.math.BigDecimal;
import java.util.List;

public class Wine {
	private int wineId;
	private Vineyard vineyard;
	private Brand brand;
	private Varietal varietal;
	private Region region;
	private int vintageYear;
	private String wineDescription;
	private BigDecimal listPrice;
	private String inventoryNotes;
	private List<Purchase> purchases;
	private List<TastingNote> tastingNotes;
	
	public int getWineId() {
		return wineId;
	}
	public void setWineId(int wineId) {
		this.wineId = wineId;
	}
	public Vineyard getVineyard() {
		return vineyard;
	}
	public void setVineyard(Vineyard vineyard) {
		this.vineyard = vineyard;
	}
	public Brand getBrand() {
		return brand;
	}
	public void setBrand(Brand brand) {
		this.brand = brand;
	}
	public Varietal getVarietal() {
		return varietal;
	}
	public void setVarietal(Varietal varietal) {
		this.varietal = varietal;
	}
	public Region getRegion() {
		return region;
	}
	public void setRegion(Region region) {
		this.region = region;
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
	public String getInventoryNotes() {
		return inventoryNotes;
	}
	public void setInventoryNotes(String inventoryNotes) {
		this.inventoryNotes = inventoryNotes;
	}
	public List<Purchase> getPurchases() {
		return purchases;
	}
	public void setPurchases(List<Purchase> purchases) {
		this.purchases = purchases;
	}
	public List<TastingNote> getTastingNotes() {
		return tastingNotes;
	}
	public void setTastingNotes(List<TastingNote> tastingNotes) {
		this.tastingNotes = tastingNotes;
	}	

}
