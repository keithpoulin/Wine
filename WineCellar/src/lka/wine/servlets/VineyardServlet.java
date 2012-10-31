package lka.wine.servlets;

import lka.wine.dao.Vineyard;
import lka.wine.jdbc.VineyardsTable;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

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

		Gson gson = new Gson();
		response.getWriter().write(gson.toJson(vineyards));
	}
}
