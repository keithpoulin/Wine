package lka.wine.servlets;

import lka.wine.*;
import lka.wine.dao.Vineyard;
import lka.wine.services.WineCellar;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class VineyardServlet extends HttpServlet{
	protected void doGet( HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException {
		WineCellar wc = new WineCellar();
		Vineyard[] vineyards = wc.getVineyards();
		
		StringBuilder sb = new StringBuilder();
		for (Vineyard v : vineyards){
			sb.append( v.get_vineyard() + "<br/>");
		}
		response.getWriter().write(sb.toString());
	}
}
