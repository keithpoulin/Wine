package lka.wine.rest;

import javax.servlet.ServletException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import lka.wine.dao.AbstractDao;
import lka.wine.jdbc.AbstractData;

public class RestWriter <R extends AbstractDao, T extends AbstractData<R>> extends RestReader<R, T> {
		
	public RestWriter(Class<R> clazzR, Class<T> clazzT) {
		super(clazzR, clazzT);
	}
	
	/**
	 *Update: as called for by backbone.js 
	 *Currently unsupported
	 * @throws ServletException 
	 */
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public void put(String data) throws ServletException {
		R brand = gson.fromJson(data, clazzR);
		try {
			clazzT.newInstance().update(brand);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
	}

	/**
	 *Create: as called for by backbone.js 
	 *Currently unsupported
	 * @throws ServletException 
	 */
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String post(String data) throws ServletException {
		String json = null;
		try {
			R model = gson.fromJson(data, clazzR);
			int id = clazzT.newInstance().insert(model);
			model.setId(id);
			json = gson.toJson(model);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) throws ServletException {
		try {
			clazzT.newInstance().delete(id);
		} catch (Exception e) {
		    throw new ServletException(e);
		}	
	}
}
