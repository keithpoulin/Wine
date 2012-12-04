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

import lka.wine.dao.Wine;
import lka.wine.dao.WineSummary;
import lka.wine.jdbc.WineSummaryView;
import lka.wine.jdbc.WinesTable;

@Path("WineCellar/wineSummaries")
public class WineSummaries extends AbstractRest {

	@Override
	@GET
	@Produces("application/json")
	public String getAll() {
		try {
			List<WineSummary> wineSummaries = new WineSummaryView().select();
			return gson.toJson(wineSummaries);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	@GET @Path("{id}")
	@Produces("application/json")
	public String get(@PathParam("id") int id) {
		try {
			Object wineSummaries = new WineSummaryView().select(id);
			return gson.toJson(wineSummaries);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	@PUT
	@Path("{id}")
	@Consumes("application/json")
	@Produces("text/plain")
	public void put(String data) {
		//NOT ALLOWED
	}

	@Override
	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String post(String data) {
		return "action not allowed";
	}

	@Override
	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") int id) {
		// NOT ALLOWED
	}

}
