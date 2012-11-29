package lka.wine.rest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.dao.TastingNote;
import lka.wine.jdbc.TastingNotesTable;

@Path("/WineCellar/tastingNotes")
public class TastingNotes extends AbstractRest {

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<TastingNote> tastingNotes = new TastingNotesTable().select();
			return gson.toJson(tastingNotes);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * Currently unsupported
	 */
	@Override
	@GET
	@Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) {
		try {
			List<TastingNote> tastingNotes = new TastingNotesTable().select(id);
			return gson.toJson(tastingNotes);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 *Update: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@PUT
	@Path("{data}")
	@Produces("text/plain")
	public void put(@PathParam("data") String data) {
		TastingNote tastingNote = gson.fromJson(data, TastingNote.class);
		try {
			new TastingNotesTable().update(tastingNote);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 *Create: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@POST
	@Path("{data}")
	@Produces("text/plain")
	public int post(@PathParam("data") String data) {
		TastingNote tastingNote = gson.fromJson(data, TastingNote.class);
		try {
			id = new TastingNotesTable().insert(tastingNote);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return id;
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) {
		try {
			new TastingNotesTable().delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
	}

}
