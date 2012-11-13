package lka.wine.jdbc;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.common.base.Strings;

import lka.wine.dao.Brand;
import lka.wine.dao.Location;
import lka.wine.dao.LocationType;

public class LocationsTable extends AbstractData<Location> {

	private final static String tableName = "Locations";
	private final static List<String> columnNames = Arrays.asList("LocationID", "LocationName", "LocationCity", "LocationState", "LocationTypeID");
	private final static LocationType defaultLocationType = new LocationType();
	
	static {
		defaultLocationType.setLocationTypeId(0);
		defaultLocationType.setLocationType("");
	}

	// The following maps will be initialize prior to 
	// processing the select rows.
	private Map<Integer, LocationType> locationTypesMap;
	
	@Override
	protected void preGetObjects() throws Exception {
		// Refresh the maps that are used to lookup related
		// objects based on the ids.
		List<LocationType> locationTypes = new LocationTypesTable().select();
		locationTypesMap = new HashMap<Integer, LocationType>();
		for(LocationType locationType: locationTypes) {
			locationTypesMap.put(locationType.getLocationTypeId(), locationType);
		}
	}
	
	@Override
	public Location getObject(ResultSet rs) throws SQLException {
		Location location = new Location();	

		location.setLocationId(rs.getInt("LocationID"));
		location.setLocationName(Strings.nullToEmpty(rs.getString("LocationName")));
		location.setLocationCity(Strings.nullToEmpty(rs.getString("LocationCity")));
		location.setLocationState(Strings.nullToEmpty(rs.getString("LocationState")));
		int locationTypeId = rs.getInt("LocationTypeID");
		LocationType locationType = locationTypesMap.get(locationTypeId);
		if(locationType == null) {
			locationType = defaultLocationType;
		}
		location.setLocationType(locationType);
			
		return location;
	}

	@Override
	public String getTableName() {
		return tableName;
	}

	@Override
	public String getIdColumnName() {
		return columnNames.get(0);
	}

	@Override
	public List<String> getColumnNames() {
		return columnNames;
	}

	@Override
	public int setParameters(PreparedStatement pstmt, Location obj)
			throws SQLException {
		int index = 1;
		pstmt.setString(index++, obj.getLocationName());
		pstmt.setString(index++, obj.getLocationCity());
		pstmt.setString(index++, obj.getLocationState());
		pstmt.setInt(index++, obj.getLocationType().getLocationTypeId());
		return index;
	}

}