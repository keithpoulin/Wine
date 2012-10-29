package lka.wine.jdbc;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Varietals {

	private final static String selectAll = "SELECT * FROM Varietals";

	public List<lka.wine.dao.Varietal> getVarietals() throws Exception {

		Connection cn = null;
		CallableStatement cstmt = null;

		try {
			cn = DriverManager.getConnection();
			cstmt = cn.prepareCall(selectAll);
			cstmt.execute();

			return getVarietals(cstmt.getResultSet());
		} finally {
			JdbcCloser.close(cn, cstmt);
		}
	}

	private List<lka.wine.dao.Varietal> getVarietals(ResultSet rs)
			throws Exception {
		List<lka.wine.dao.Varietal> varietals = new ArrayList<lka.wine.dao.Varietal>();

		if (rs != null) {

			while (rs.next()) {
				lka.wine.dao.Varietal varietal = new lka.wine.dao.Varietal();
				
				varietal.setVarietalId(rs.getInt("VarietalID"));
				varietal.setVarietal(rs.getString("Varietal"));
				varietal.setType(rs.getString("Type"));
				
				varietals.add(varietal);
			}
		}

		return varietals;
	}

}
