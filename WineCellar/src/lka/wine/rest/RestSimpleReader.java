package lka.wine.rest;

import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.UriInfo;

import lka.wine.dao.AbstractDao;
import lka.wine.jdbc.Restable;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class RestSimpleReader <R extends AbstractDao, T extends Restable<R>> {

	@Context
	public UriInfo uriInfo;
	@Context
	public Request request;
	@Context
	public HttpServletResponse response;
	
	protected static final String dateFormat = "MMM dd, yyyy";
	protected final Class<R> clazzR;
	protected final Class<T> clazzT;
	protected final Gson gson = new GsonBuilder().setDateFormat(dateFormat).create();
	
	public RestSimpleReader(Class<R> clazzR, Class<T> clazzT) {
		this.clazzR = clazzR;
		this.clazzT = clazzT;
	}
	
	@GET
	@Produces("application/json")
	public String getAll() throws ServletException {
		String json = null;
		try {
			List<R> brands = clazzT.newInstance().select();
			json = gson.toJson(brands);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

}
