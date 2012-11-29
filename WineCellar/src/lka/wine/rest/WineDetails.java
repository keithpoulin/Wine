package lka.wine.rest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.jdbc.WineDetailsQuery;

@Path("WineCellar/wineDetails")
public class WineDetails extends AbstractRest {


	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<lka.wine.dao.WineDetails> wineDetails = new WineDetailsQuery().select();
			return gson.toJson(wineDetails);
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
			List<lka.wine.dao.WineDetails> wineDetails = new WineDetailsQuery().select(id);
			return gson.toJson(wineDetails);
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

	}

	/**
	 *Create: as called for by backbone.js 
	 *Currently unsupported
	 */
	@Override
	@POST
	@Produces("text/plain")
	public String post(String data) {
		return String.valueOf(id);
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) {
	
	}


}
