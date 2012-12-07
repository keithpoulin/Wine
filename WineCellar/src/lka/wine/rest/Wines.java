package lka.wine.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import lka.wine.dao.Purchase;
import lka.wine.dao.TastingNote;
import lka.wine.dao.Wine;
import lka.wine.jdbc.PurchasesTable;
import lka.wine.jdbc.TastingNotesTable;
import lka.wine.jdbc.WinesTable;

@Path("/WineCellar/wines")
public class Wines extends AbstractRest{

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<Wine> wines = new WinesTable().select();
			return gson.toJson(wines);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	@GET @Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) {
		try {
			Wine wine = new WinesTable().select(id);
			return gson.toJson(wine);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * Currently unsupported
	 */
	@GET
	@Path("{id}/purchases")
	@Produces("application/json")
	public String getByPurchases(@PathParam("id") int wineId) {
		try {
			List<Purchase> purchases = new PurchasesTable().selectByWineId(wineId);
			return gson.toJson(purchases);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	

	/**
	 * Currently unsupported
	 */
	@GET
	@Path("{id}/tastingNotes")
	@Produces("application/json")
	public String getTastingNotes(@PathParam("id") int wineId) {
		try {
			List<TastingNote> tastingNotes = new TastingNotesTable().selectByWineId(wineId);
			return gson.toJson(tastingNotes);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 *Update: as called for by backbone.js 
	 */
	@Override
	@PUT @Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public void put(String data) {
		Wine wine = gson.fromJson(data, Wine.class);
		try {
			new WinesTable().update(wine);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 *Create: as called for by backbone.js 
	 */
	@Override
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String post(String data) {		
		try {
			Wine wine = gson.fromJson(data, Wine.class);
			id = new WinesTable().insert(wine);
			wine.setWineId(id);
			return gson.toJson(wine);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "error: " + id;
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) {
		try {
			new WinesTable().delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
	}

}
