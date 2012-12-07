package lka.wine.rest;

import java.util.List;

import javax.servlet.ServletException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import lka.wine.dao.Region;
import lka.wine.jdbc.RegionsTable;

@Path("/WineCellar/regions")
public class Regions extends AbstractRest{

	@Override
	@GET
	@Produces("application/json")
	public String getAll() throws ServletException {
		String json = null;
		try {
			List<Region> regions = new RegionsTable().select();
			json = gson.toJson(regions);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	/**
	 * Currently unsupported
	 * @throws ServletException 
	 */
	@Override
	@GET
	@Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) throws ServletException {
		String json = null;
		try {
			Region region = new RegionsTable().select(id);
			json = gson.toJson(region);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	/**
	 *Update: as called for by backbone.js 
	 *Currently unsupported
	 * @throws ServletException 
	 */
	@Override
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public void put(String data) throws ServletException {
		Region region = gson.fromJson(data, Region.class);
		try {
			new RegionsTable().update(region);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
	}

	/**
	 *Create: as called for by backbone.js 
	 *Currently unsupported
	 * @throws ServletException 
	 */
	@Override
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("text/plain")
	public String post(String data) throws ServletException {
		String json = null;		
		try {
			Region region = gson.fromJson(data, Region.class);
			id = new RegionsTable().insert(region);
			region.setRegionId(id);
			json =  gson.toJson(region);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) throws ServletException {
		try {
			new RegionsTable().delete(id);
		} catch (Exception e) {
		    throw new ServletException(e);
		}	
	}

}
