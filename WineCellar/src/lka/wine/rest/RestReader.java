package lka.wine.rest;

import javax.servlet.ServletException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import lka.wine.dao.AbstractDao;
import lka.wine.jdbc.Restable;

public class RestReader <R extends AbstractDao, T extends Restable<R>> extends RestSimpleReader<R, T> {

	
	public RestReader(Class<R> clazzR, Class<T> clazzT) {
		super(clazzR, clazzT);
	}
	

	/**
	 * Currently unsupported
	 * @throws ServletException 
	 */
	@GET
	@Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) throws ServletException {
		String json = null;
		try {
			R brands = clazzT.newInstance().select(id);
			json = gson.toJson(brands);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}
}
