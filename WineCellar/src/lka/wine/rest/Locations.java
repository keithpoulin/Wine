package lka.wine.rest;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.jdbc.*;


@Path("/WineCellar/locations")
public class Locations extends AbstractRest{

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<lka.wine.dao.Location> location = new LocationsTable().select();
			return gson.toJson(location);
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
			List<lka.wine.dao.Location> location = new LocationsTable().select(id);
			return gson.toJson(location);
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
		lka.wine.dao.Location location = gson.fromJson(data, lka.wine.dao.Location.class);
		try {
			new LocationsTable().update(location);
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
		lka.wine.dao.Location location = gson.fromJson(data, lka.wine.dao.Location.class);
		try {
			id = new LocationsTable().insert(location);
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
			new LocationsTable().delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
	}

}
