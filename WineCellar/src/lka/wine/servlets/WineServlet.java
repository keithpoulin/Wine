package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lka.wine.dao.Brand;
import lka.wine.dao.Region;
import lka.wine.dao.Varietal;
import lka.wine.dao.Vineyard;
import lka.wine.dao.Wine;
import lka.wine.jdbc.WinesTable;

public class WineServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		List<Wine> wines = null;
		StringBuilder sb = new StringBuilder();
		try {
			wines = new WinesTable().select();
		} catch (Exception ex) {
			ex.printStackTrace();
			sb.append(ex.getMessage() + "<br/>");
		}

		if (wines != null) {
			for (Wine w : wines) {
				Brand brand = w.getBrand();
				Region region = w.getRegion();
				Varietal varietal = w.getVarietal();
				Vineyard vineyard = w.getVineyard();
				
				sb.append(w.getWineId());
				sb.append("|");
				sb.append(vineyard == null ? "" : vineyard.getVineyard());
				sb.append("|");
				sb.append(brand == null ? "" : brand.getBrandName());
				sb.append("|");
				sb.append(varietal == null ? "" : varietal.getVarietal());
				sb.append("|");
				sb.append(region == null ? "" : region.getRegion());
				sb.append(" ");
				sb.append(region == null ? "" : region.getSubRegion());
				sb.append("|");
				sb.append(w.getVintageYear());
				sb.append("|");
				sb.append(w.getListPrice());
				sb.append("|");
				sb.append(w.getWineDescription());
				sb.append("<br/>");
			}
		}
		response.getWriter().write(sb.toString());
	}
}
