package lka.wine.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lka.wine.dao.Brand;
import lka.wine.dao.Location;
import lka.wine.dao.LocationType;
import lka.wine.dao.Region;
import lka.wine.dao.Varietal;
import lka.wine.dao.Vineyard;
import lka.wine.jdbc.BrandsTable;
import lka.wine.jdbc.LocationTypesTable;
import lka.wine.jdbc.LocationsTable;
import lka.wine.jdbc.RegionsTable;
import lka.wine.jdbc.VarietalsTable;
import lka.wine.jdbc.VineyardsTable;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class LookupDataServlet extends HttpServlet {
	protected enum LookupDataType {
		BRANDS, LOCATIONS, LOCATION_TYPES, REGIONS, VARIETALS, VINEYARDS
	}

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
			Gson gson = new Gson();
			LookupDataType lookupDataType = LookupDataType.valueOf(request
					.getParameter("lookupDataType").toUpperCase());
			switch (lookupDataType) {
			case BRANDS:
				List<Brand> brands = new BrandsTable().select();
				response.getWriter().write(gson.toJson(brands));
				break;
			case LOCATIONS:
				List<Location> locations = new LocationsTable().select();
				response.getWriter().write(gson.toJson(locations));
				break;
			case LOCATION_TYPES:
				List<LocationType> locationTypes = new LocationTypesTable()
						.select();
				response.getWriter().write(gson.toJson(locationTypes));
				break;
			case REGIONS:
				List<Region> regions = new RegionsTable().select();
				response.getWriter().write(gson.toJson(regions));
				break;
			case VARIETALS:
				List<Varietal> varietals = new VarietalsTable().select();
				response.getWriter().write(gson.toJson(varietals));
				break;
			case VINEYARDS:
				List<Vineyard> vineyards = new VineyardsTable().select();
				response.getWriter().write(gson.toJson(vineyards));
				break;
			default:
				// TODO: Handle error
			}
		} catch (Exception ex) {
			// TODO: Handle error
		}

	}
}
