package lka.wine.rest;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.UriInfo;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public abstract class AbstractRest {
	@Context
	public UriInfo uriInfo;
	@Context
	public Request request;
	@Context
	public HttpServletResponse response;
	
	private static final String dateFormat = "MMM dd, yyyy";
	public Gson gson = new GsonBuilder().setDateFormat(dateFormat).create();
	public int id = 0;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public abstract String getAll() throws ServletException;
	
	@GET @Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public abstract String get(@PathParam("id") int id) throws ServletException;

	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public abstract void put(String data) throws ServletException;
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public abstract String post(String data) throws ServletException;
	
	@DELETE
	@Path("{id}")
	public abstract void delete(@PathParam("id") int id) throws ServletException;
}
