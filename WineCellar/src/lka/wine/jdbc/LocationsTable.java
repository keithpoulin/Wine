package lka.wine.jdbc;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.Location;

public class LocationsTable extends AbstractData<Location> {

	private final static String tableName = "Locations";
	private final static List<String> columnNames = Arrays.asList("LocationID", "LocationName", "LocationCity", "LocationState", "LocationTypeID");

	@Override
	public Location getObject(ResultSet rs) throws SQLException {
		Location location = new Location();	
		location.setLocationId(rs.getInt("LocationID"));
		location.setLocationName(rs.getString("LocationName"));
		location.setLocationCity(rs.getString("LocationCity"));
		location.setLocationState(rs.getString("LocationState"));
		location.setLocationTypeId(rs.getInt("LocationTypeID"));
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
		pstmt.setInt(index++, obj.getLocationTypeId());
		return index;
	}

}