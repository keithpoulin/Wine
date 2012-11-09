package lka.wine.jdbc;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.TastingNote;

public class TastingNotesTable extends AbstractData<TastingNote> {

	private final static String tableName = "TastingNotes";
	private final static List<String> columnNames = Arrays.asList("TastingNoteID", "WineID", "TastingDate", "ReviewedBy", "Review", "Rating");
	
	@Override
	public TastingNote getObject(ResultSet rs) throws SQLException {
		TastingNote tastingNote = new TastingNote();	
		tastingNote.setTastingNoteId(rs.getInt("TastingNoteID"));
		tastingNote.setWineId(rs.getInt("WineID"));
		tastingNote.setTastingDate(rs.getDate("TastingDate"));
		tastingNote.setReviewedBy(rs.getString("ReviewedBy"));
		tastingNote.setReview(rs.getString("Review"));
		tastingNote.setRating(rs.getInt("Rating"));
		return tastingNote;
	}

	public List<TastingNote> select(int wineId) throws Exception {
		String sql = getSelectSql() + " WHERE WineID = ?";
		Connection cn = null;
		CallableStatement cstmt = null;

		try {
			cn = DriverManager.getConnection();
			cstmt = cn.prepareCall(sql);
			cstmt.setInt(1, wineId);
			cstmt.execute();

			return getObjects(cstmt.getResultSet());
		} finally {
			JdbcCloser.close(cn, cstmt);
		}
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
	public int setInsertParameters(CallableStatement cstmt, TastingNote obj)
			throws SQLException {
		int index = 1;
		cstmt.setInt(index++, obj.getWineId());
		cstmt.setDate(index++, new java.sql.Date(obj.getTastingDate().getTime()));
		cstmt.setString(index++, obj.getReviewedBy());
		cstmt.setString(index++, obj.getReview());
		cstmt.setInt(index++, obj.getRating());
		return index;
	}

}