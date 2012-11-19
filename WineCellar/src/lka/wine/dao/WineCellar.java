package lka.wine.dao;

import java.util.List;

public class WineCellar {
	List<Brand> brands;
	List<Location> locations;
	List<LocationType> locationTypes;
	List<Purchase> purchases;
	List<Region> regions;
	List<TastingNote> tastingNotes;
	List<Varietal> varietals;
	List<Vineyard> vineyards;
	List<Wine> wines;
	
	public List<Brand> getBrands() {
		return brands;
	}
	public void setBrands(List<Brand> brands) {
		this.brands = brands;
	}
	public List<Location> getLocations() {
		return locations;
	}
	public void setLocations(List<Location> locations) {
		this.locations = locations;
	}
	public List<LocationType> getLocationTypes() {
		return locationTypes;
	}
	public void setLocationTypes(List<LocationType> locationTypes) {
		this.locationTypes = locationTypes;
	}
	public List<Purchase> getPurchases() {
		return purchases;
	}
	public void setPurchases(List<Purchase> purchases) {
		this.purchases = purchases;
	}
	public List<Region> getRegions() {
		return regions;
	}
	public void setRegions(List<Region> regions) {
		this.regions = regions;
	}
	public List<TastingNote> getTastingNotes() {
		return tastingNotes;
	}
	public void setTastingNotes(List<TastingNote> tastingNotes) {
		this.tastingNotes = tastingNotes;
	}
	public List<Varietal> getVarietals() {
		return varietals;
	}
	public void setVarietals(List<Varietal> varietals) {
		this.varietals = varietals;
	}
	public List<Vineyard> getVineyards() {
		return vineyards;
	}
	public void setVineyards(List<Vineyard> vineyards) {
		this.vineyards = vineyards;
	}
	public List<Wine> getWines() {
		return wines;
	}
	public void setWines(List<Wine> wines) {
		this.wines = wines;
	}
	
}
