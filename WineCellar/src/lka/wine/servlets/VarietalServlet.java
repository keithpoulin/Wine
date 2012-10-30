package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lka.wine.dao.Varietal;
import lka.wine.jdbc.VarietalsTable;

public class VarietalServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		List<Varietal> varietals = null;
		StringBuilder sb = new StringBuilder();
		try {
			varietals = new VarietalsTable().select();
		} catch (Exception ex) {
			// TODO Auto-generated catch block
			ex.printStackTrace();
			sb.append(ex.getMessage() + "<br/>");
		}

		if (varietals != null) {
			for (Varietal v : varietals) {
				sb.append(v.getVarietal() + "<br/>");
			}
		}
		response.getWriter().write(sb.toString());
	}
}