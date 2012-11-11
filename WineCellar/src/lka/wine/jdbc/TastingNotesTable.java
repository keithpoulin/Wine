package lka.wine.jdbc;

import java.sql.PreparedStatement;
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
		PreparedStatement pstmt = null;

		try {
			cn = DriverManager.getConnection();
			pstmt = cn.prepareStatement(sql);
			pstmt.setInt(1, wineId);
			pstmt.execute();

			return getObjects(pstmt.getResultSet());
		} finally {
			JdbcCloser.close(cn, pstmt);
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
	public int setParameters(PreparedStatement pstmt, TastingNote obj)
			throws SQLException {
		int index = 1;
		pstmt.setInt(index++, obj.getWineId());
		pstmt.setDate(index++, new java.sql.Date(obj.getTastingDate().getTime()));
		pstmt.setString(index++, obj.getReviewedBy());
		pstmt.setString(index++, obj.getReview());
		pstmt.setInt(index++, obj.getRating());
		return index;
	}

}