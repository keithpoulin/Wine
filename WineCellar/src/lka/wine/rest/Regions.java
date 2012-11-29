package lka.wine.rest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.dao.Region;
import lka.wine.jdbc.RegionsTable;

@Path("/WineCellar/regions")
public class Regions extends AbstractRest{

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<Region> regions = new RegionsTable().select();
			return gson.toJson(regions);
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
			List<Region> regions = new RegionsTable().select(id);
			return gson.toJson(regions);
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
		Region region = gson.fromJson(data, Region.class);
		try {
			new RegionsTable().update(region);
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
	@Produces("text/plain")
	public String post(String data) {
		Region region = gson.fromJson(data, Region.class);
		try {
			id = new RegionsTable().insert(region);
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
			new RegionsTable().delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
	}

}
