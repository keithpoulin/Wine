package lka.wine.rest;

import java.io.IOException;
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

import lka.wine.dao.Wine;
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

	/**
	 * Currently unsupported
	 */
	@Override
	@GET
	@Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) {
		try {
			List<Wine> wines = new WinesTable().select(id);
			return gson.toJson(wines);
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
	 *Currently unsupported
	 */
	@Override
	@POST
	@Produces(MediaType.TEXT_PLAIN)
	public String post(String data) {
		Wine wine = gson.fromJson(data, Wine.class);
		try {
			id = new WinesTable().insert(wine);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return String.valueOf(id);
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
