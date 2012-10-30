package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

		if (wineSummaries != null) {
			for (WineSummary w : wineSummaries) {			
				sb.append(w.getWineId());
				sb.append("|");
				sb.append(w.getVintageYear());
				sb.append("|");
				sb.append(w.getWineDescription());
				sb.append("|");
				sb.append(w.getListPrice());
				sb.append("|");
				sb.append(w.getVineyard());
				sb.append("|");
				sb.append(w.getBrandName());
				sb.append("|");
				sb.append(w.getVarietal());
				sb.append("|");
				sb.append(w.getRegion());
				sb.append("|");
				sb.append(w.getSubRegion());
				sb.append("|");
				sb.append(w.getPricePer());
				sb.append("|");
				sb.append(w.getMinPrice());
				sb.append("|");
				sb.append(w.getAvgPrice());
				sb.append("|");
				sb.append(w.getMaxPrice());
				sb.append("|");
				sb.append(w.getQty());
				sb.append("|");
				sb.append(w.getQtyOnHand());
				sb.append("<br/>");
			}
		}
		response.getWriter().write(sb.toString());
	}
}
