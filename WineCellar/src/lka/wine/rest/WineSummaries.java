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

import lka.wine.dao.WineSummary;
import lka.wine.jdbc.WineSummaryView;

@Path("WineCellar/wineSummaries")
public class WineSummaries extends AbstractRest {

	@Override
	@GET
	@Produces("application/json")
	public String getAll() throws ServletException {
		String json = null;
		try {
			List<WineSummary> wineSummaries = new WineSummaryView().select();
			json = gson.toJson(wineSummaries);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	@Override
	@GET @Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) throws ServletException {
		String json = null;
		try {
			WineSummary wineSummary = new WineSummaryView().select(id);
			json = gson.toJson(wineSummary);
		} catch (Exception e) {
		    throw new ServletException(e);
		}
		return json;
	}

	@Override
	@PUT
	@Path("{id}")
	@Consumes("application/json")
	@Produces("text/plain")
	public void put(String data) throws ServletException {
	    throw new ServletException(new UnsupportedOperationException());
	}

	@Override
	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String post(String data) throws ServletException {
	    throw new ServletException(new UnsupportedOperationException());
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) throws ServletException {
	    throw new ServletException(new UnsupportedOperationException());
	}

}
