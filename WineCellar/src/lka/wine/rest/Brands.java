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
import javax.ws.rs.core.Request;

import lka.wine.dao.Brand;
import lka.wine.jdbc.BrandsTable;

@Path("/WineCellar/brands")
public class Brands extends AbstractRest {

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<Brand> brands = new BrandsTable().select();
			return gson.toJson(brands);
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
			Object brands = new BrandsTable().select(id);
			return gson.toJson(brands);
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
	@Produces(MediaType.TEXT_PLAIN)
	public void put(String data) {
		Brand brand = gson.fromJson(data, Brand.class);
		try {
			new BrandsTable().update(brand);
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
	@Produces(MediaType.TEXT_PLAIN)
	public String post(String data) {
		try {
			Brand brand = gson.fromJson(data, Brand.class);
			id = new BrandsTable().insert(brand);
			brand.setBrandId(id);
			return gson.toJson(brand);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "error" + id;
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) {
		try {
			new BrandsTable().delete(id);
		} catch (Exception e) {
			e.printStackTrace();
		}	
		
	}
}
