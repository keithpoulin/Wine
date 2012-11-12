package lka.wine.servlets;

import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lka.wine.dao.WineSummary;
import lka.wine.jdbc.WineSummaryView;

import com.google.gson.Gson;

public class WineSummaryServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException {
		try {
			List<WineSummary> wineSummaries = null;
			wineSummaries = new WineSummaryView().select();
			Gson gson = new Gson();
			response.getWriter().write(gson.toJson(wineSummaries));		
		}
		catch (Exception ex) {
		    throw new ServletException(ex);
		}
	}
}
