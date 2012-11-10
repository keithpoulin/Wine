package lka.wine.dao;

public class LocationType extends AbstractDao {
	private int locationTypeId;
	private String locationType;
	
	public int getLocationTypeId() {
		return locationTypeId;
	}
	public void setLocationTypeId(int locationTypeId) {
		this.locationTypeId = locationTypeId;
	}
	public String getLocationType() {
		return locationType;
	}
	public void setLocationType(String locationType) {
		this.locationType = locationType;
	}
	@Override
	public int getId() {
		return getLocationTypeId();
	}
	
}
