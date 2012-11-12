package lka.wine.servlets;

import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lka.wine.dao.Wine;
import lka.wine.jdbc.WinesTable;

import com.google.gson.Gson;

public class WineServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException {
		try {
			List<Wine> wines = null;
			wines = new WinesTable().select();
			Gson gson = new Gson();
			response.getWriter().write(gson.toJson(wines));			
		}
		catch (Exception ex) {
		    throw new ServletException(ex);
		}
	}
}
