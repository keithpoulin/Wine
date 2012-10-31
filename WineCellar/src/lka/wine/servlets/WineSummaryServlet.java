package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import lka.wine.dao.WineSummary;
import lka.wine.jdbc.WineSummaryView;

public class WineSummaryServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		List<WineSummary> wineSummaries = null;
		StringBuilder sb = new StringBuilder();
		try {
			wineSummaries = new WineSummaryView().select();
		} catch (Exception ex) {
			ex.printStackTrace();
			sb.append(ex.getMessage() + "<br/>");
		}

		Gson gson = new Gson();
		response.getWriter().write(gson.toJson(wineSummaries));
	}
}
