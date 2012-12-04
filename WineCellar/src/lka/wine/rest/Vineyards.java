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

import lka.wine.dao.*;
import lka.wine.jdbc.*;

@Path("/WineCellar/vineyards")
public class Vineyards extends AbstractRest{

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<Vineyard> vineyards = new VineyardsTable().select();
			return gson.toJson(vineyards);
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
			Object vineyards = new VineyardsTable().select(id);
			return gson.toJson(vineyards);
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
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public void put(String data) {
		Vineyard vineyard = gson.fromJson(data, Vineyard.class);
		try {
			new VineyardsTable().update(vineyard);
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
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public String post(String data) {		
		try {
			Vineyard vineyard = gson.fromJson(data, Vineyard.class);
			id = new VineyardsTable().insert(vineyard);
			vineyard.setVineyardId(id);
			return gson.toJson(vineyard);
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
			new VineyardsTable().delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
	}

}