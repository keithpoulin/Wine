package lka.wine.servlets;

import java.awt.image.BufferedImage;
import java.io.File;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class ImageServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException {
		try {
			//String wineId = request.getParameter("wineId");
			String path = request.getSession().getServletContext().getRealPath("/images/FloraSpringsTrilogy.jpg");
			File file = new File(path);
			BufferedImage image = ImageIO.read(file);
			response.setContentType("image/jpeg");
			java.io.OutputStream outputStream = response.getOutputStream();
			javax.imageio.ImageIO.write(image, "jpeg", outputStream); // I'll explain the 2nd arg momentarily
			outputStream.close();			
		}
		catch (Exception ex) {
		    throw new ServletException(ex);
		}
	}
}
