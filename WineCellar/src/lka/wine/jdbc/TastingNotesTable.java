package lka.wine.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import lka.wine.dao.TastingNote;

public class TastingNotesTable extends AbstractTable<TastingNote> {

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

}