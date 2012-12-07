package lka.wine.rest;

import javax.ws.rs.Path;

import lka.wine.dao.TastingNote;
import lka.wine.jdbc.TastingNotesTable;

@Path("/WineCellar/tastingNotes")
public class TastingNotes extends RestBase<TastingNote, TastingNotesTable> {

	public TastingNotes() {
		super(TastingNote.class, TastingNotesTable.class);
	}

}
