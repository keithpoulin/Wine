package lka.wine.servlets;

import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lka.wine.dao.WineDetails;
import lka.wine.jdbc.WineDetailsQuery;

import com.google.gson.Gson;


public class WineDetailsServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException {
		try {
			String wineId = request.getParameter("wineId");		
			List<WineDetails> wineDetails = null;
			if(wineId == null) {
				wineDetails = new WineDetailsQuery().select();				
			}
			else {
				wineDetails = new WineDetailsQuery().select(Integer.parseInt(wineId));
			}
			
			Gson gson = new Gson();
			response.getWriter().write(gson.toJson(wineDetails));			
		}
		catch (Exception ex) {
		    throw new ServletException(ex);
		}
	}
}
