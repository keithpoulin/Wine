package lka.wine.jdbc;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import com.google.common.base.Strings;

import lka.wine.dao.LocationType;

public class LocationTypesTable extends AbstractData<LocationType> {

	private final static String tableName = "LocationTypes";
	private final static List<String> columnNames = Arrays.asList("LocationTypeID", "LocationType");

	@Override
	public LocationType getObject(ResultSet rs) throws SQLException {
		LocationType locationType = new LocationType();	
		locationType.setLocationTypeId(rs.getInt("LocationTypeID"));
		locationType.setLocationType(Strings.nullToEmpty(rs.getString("LocationType")));
		return locationType;
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
	public int setParameters(PreparedStatement pstmt, LocationType obj)
			throws SQLException {
		int index = 1;
		pstmt.setString(index++, obj.getLocationType());	
		return index;
	}

}