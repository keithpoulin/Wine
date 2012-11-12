package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.*;

import lka.wine.dao.WineDetails;
import lka.wine.jdbc.WineDetailsQuery;


public class WineDetailsServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		String wineId = request.getParameter("wineId");
		
		List<WineDetails> wineDetails = null;
		StringBuilder sb = new StringBuilder();
		try {
			if(wineId == null) {
				wineDetails = new WineDetailsQuery().select();				
			}
			else {
				wineDetails = new WineDetailsQuery().select(Integer.parseInt(wineId));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			sb.append(ex.getMessage() + "<br/>");
		}
		
		Gson gson = new Gson();

		response.getWriter().write(gson.toJson(wineDetails));

	}
}
