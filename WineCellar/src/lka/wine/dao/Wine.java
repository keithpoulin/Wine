package lka.wine.dao;

import java.math.BigDecimal;

public class Wine extends AbstractDao {
	private int wineId;
	private int vineyardId;
	private int brandId;
	private int varietalId;
	private int regionId;
	private Vineyard vineyard;
	private Brand brand;
	private Varietal varietal;
	private Region region;
	private int vintageYear;
	private String wineDescription;
	private BigDecimal listPrice;
	private String inventoryNotes;
	
	public int getWineId() {
		return wineId;
	}
	public void setWineId(int wineId) {
		this.wineId = wineId;
	}
	public int getVineyardId() {
		return vineyardId;
	}
	public void setVineyardId(int vineyardId) {
		this.vineyardId = vineyardId;
	}
	public int getBrandId() {
		return brandId;
	}
	public void setBrandId(int brandId) {
		this.brandId = brandId;
	}
	public int getVarietalId() {
		return varietalId;
	}
	public void setVarietalId(int varietalId) {
		this.varietalId = varietalId;
	}
	public int getRegionId() {
		return regionId;
	}
	public void setRegionId(int regionId) {
		this.regionId = regionId;
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
	@Override
	public int getId() {
		return getWineId();
	}
	@Override
	public void setId(int id) {
		setWineId(id);
	}

}
