package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import lka.wine.dao.Wine;
import lka.wine.jdbc.WinesTable;

public class WineServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		List<Wine> wines = null;
		try {
			wines = new WinesTable().select();
		} catch (Exception ex) {
			ex.printStackTrace();			
		}

		Gson gson = new Gson();
		response.getWriter().write(gson.toJson(wines));
	}
}
