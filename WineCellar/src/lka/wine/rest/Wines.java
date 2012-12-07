package lka.wine.rest;

import java.util.List;

import javax.servlet.ServletException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.dao.Purchase;
import lka.wine.dao.TastingNote;
import lka.wine.dao.Wine;
import lka.wine.jdbc.PurchasesTable;
import lka.wine.jdbc.TastingNotesTable;
import lka.wine.jdbc.WinesTable;

@Path("/WineCellar/wines")
public class Wines extends RestWriter<Wine, WinesTable> {

	public Wines() {
		super(Wine.class, WinesTable.class);
	}

	/**
	 * Currently unsupported
	 * @throws ServletException 
	 */
	@GET
	@Path("{id}/purchases")
	@Produces("application/json")
	public String getByPurchases(@PathParam("id") int wineId) throws ServletException {
		String json = null;
		try {
			List<Purchase> purchases = new PurchasesTable().selectByWineId(wineId);
			json =  gson.toJson(purchases);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}
	

	/**
	 * Currently unsupported
	 * @throws ServletException 
	 */
	@GET
	@Path("{id}/tastingNotes")
	@Produces("application/json")
	public String getTastingNotes(@PathParam("id") int wineId) throws ServletException {
		String json = null;
		try {
			List<TastingNote> tastingNotes = new TastingNotesTable().selectByWineId(wineId);
			json = gson.toJson(tastingNotes);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}	
}

