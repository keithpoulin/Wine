package lka.wine.servlets;

import lka.wine.dao.Vineyard;
import lka.wine.jdbc.VineyardsTable;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class VineyardServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		List<Vineyard> vineyards = null;
		StringBuilder sb = new StringBuilder();
		try {
			vineyards = new VineyardsTable().select();
		} catch (Exception ex) {
			ex.printStackTrace();
			sb.append(ex.getMessage() + "<br/>");
		}

		if (vineyards != null) {
			for (Vineyard v : vineyards) {
				sb.append(v.getVineyard() + "<br/>");
			}
		}
		response.getWriter().write(sb.toString());
	}
}
