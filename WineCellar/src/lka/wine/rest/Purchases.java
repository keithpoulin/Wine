package lka.wine.rest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.dao.Purchase;
import lka.wine.jdbc.PurchasesTable;

@Path("/WineCellar/purchases")
public class Purchases extends AbstractRest {


	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<Purchase> purchases = new PurchasesTable().select();
			return gson.toJson(purchases);
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
			List<Purchase> purchases = new PurchasesTable().select(id);
			return gson.toJson(purchases);
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
		Purchase purchase = gson.fromJson(data, Purchase.class);
		try {
			new PurchasesTable().update(purchase);
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
		Purchase purchase = gson.fromJson(data, Purchase.class);
		try {
			id = new PurchasesTable().insert(purchase);
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
			new PurchasesTable().delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
	}


}
