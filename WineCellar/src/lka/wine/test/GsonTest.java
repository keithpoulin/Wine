package lka.wine.test;

import static org.junit.Assert.*;
import lka.wine.dao.Brand;

import org.junit.*;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class GsonTest {
	private static final String dateFormat = "MMM dd, yyyy";
	private Gson gson = new GsonBuilder().setDateFormat(dateFormat).create();
	@Test
	public void gson_to_brand(){
		String input = "{brandName:'Neils test Brand'}";
		Brand brand = gson.fromJson(input, Brand.class);
		
		assertEquals(true, brand instanceof Brand);
	}
}
