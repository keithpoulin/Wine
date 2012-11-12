package lka.wine.jdbc;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import com.google.common.base.Strings;

import lka.wine.dao.Brand;

public class BrandsTable extends AbstractData<Brand> {

	private final static String tableName = "Brands";
	private final static List<String> columnNames = Arrays.asList("BrandID", "BrandName");

	@Override
	public Brand getObject(ResultSet rs) throws SQLException {
		Brand brand = new Brand();	
		brand.setBrandId(rs.getInt("BrandID"));
		brand.setBrandName(Strings.nullToEmpty(rs.getString("BrandName")));
		return brand;
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
	public int setParameters(PreparedStatement pstmt, Brand obj)
			throws SQLException {
		int index = 1;
		pstmt.setString(index++, obj.getBrandName());
		return index;
	}

}
