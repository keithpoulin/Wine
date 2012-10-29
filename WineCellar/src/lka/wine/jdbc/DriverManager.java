//$Id$
package lka.wine.jdbc;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Class that manages the credentials for connecting to a database.<br>
 * <br>
 * Copyright (c) 2012 MICROS Retail
 * 
 * @author kpoulin
 * @created Sep 19, 2012
 * @version $Revision$
 */
public class DriverManager {

  private final static String _driverName;
  private final static String _url;


  static {

    _driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
    _url = System.getProperty("JDBC_CONNECTION_STRING");
  }

  public static Connection getConnection()
      throws SQLException, ClassNotFoundException {
    loadDriver();
    Connection connection =
        java.sql.DriverManager.getConnection(_url);
    return connection;
  }

  protected static void loadDriver()
      throws ClassNotFoundException {
    Class.forName(_driverName);
  }

}
