package lka.wine.servlets;

import lka.wine.dao.Vineyard;
import lka.wine.services.WineCellar;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class VineyardServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		WineCellar wc = new WineCellar();
		Vineyard[] vineyards = null;
		StringBuilder sb = new StringBuilder();
		try {
			vineyards = wc.getVineyards();
		} catch (Exception ex) {
			// TODO Auto-generated catch block
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
