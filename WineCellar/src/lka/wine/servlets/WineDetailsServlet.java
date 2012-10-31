package lka.wine.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.*;

import lka.wine.dao.PurchaseDetail;
import lka.wine.dao.TastingNote;
import lka.wine.dao.WineDetails;
import lka.wine.jdbc.WineDetailsQuery;


public class WineDetailsServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		int wineId = Integer.parseInt( request.getParameter("wineId") );
		
		WineDetails wineDetails = null;
		StringBuilder sb = new StringBuilder();
		try {
			wineDetails = new WineDetailsQuery().select(wineId);
		} catch (Exception ex) {
			ex.printStackTrace();
			sb.append(ex.getMessage() + "<br/>");
		}
		
		List<PurchaseDetail> purchaseDetails = wineDetails.getPurchaseDetails();;
		List<TastingNote> tastingNotes = wineDetails.getTastingNotes();;

		Gson gson = new Gson();
		JsonObject result = new JsonObject();
		JsonElement notes = gson.toJsonTree(tastingNotes);
		JsonElement purchase = gson.toJsonTree(purchaseDetails);
		result.add("tastingNotes", notes);
		result.add("purchaseDetails", purchase);
		
		response.getWriter().write(gson.toJson(result));
	}
}
