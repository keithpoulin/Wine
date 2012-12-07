package lka.wine.dao;

public class Region extends AbstractDao {
	private int regionId;
	private String region;
	private String subRegion;
	
	public int getRegionId() {
		return regionId;
	}
	public void setRegionId(int regionId) {
		this.regionId = regionId;
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
	@Override
	public int getId() {
		return getRegionId();
	}
	@Override
	public void setId(int id) {
		setRegionId(id);
	}

}
