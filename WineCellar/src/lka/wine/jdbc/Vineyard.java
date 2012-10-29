package lka.wine.jdbc;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Vineyard {

	private final static String selectAll = "SELECT * FROM Vineyards";

	public List<lka.wine.dao.Vineyard> getVineyards() throws Exception {

		Connection cn = null;
		CallableStatement cstmt = null;

		try {
			cn = DriverManager.getConnection();
			cstmt = cn.prepareCall(selectAll);
			cstmt.execute();

			return getVineyards(cstmt.getResultSet());
		} finally {
			JdbcCloser.close(cn, cstmt);
		}
	}

	private List<lka.wine.dao.Vineyard> getVineyards(ResultSet rs)
			throws Exception {
		List<lka.wine.dao.Vineyard> vineyards = new ArrayList<lka.wine.dao.Vineyard>();

		if (rs != null) {

			while (rs.next()) {
				lka.wine.dao.Vineyard vineyard = new lka.wine.dao.Vineyard();

				vineyard.setVineyardId(rs.getInt("VineyardID"));
				vineyard.setVineyard(rs.getString("Vineyard"));

				vineyards.add(vineyard);
			}
		}

		return vineyards;
	}

}
