//$Id$
package lka.wine.jdbc;

import java.sql.*;


/**
 * JDBC connection closer.<br>
 * <br>
 * Copyright (c) 2012 MICROS Retail
 * 
 * @author kpoulin
 * @created Sep 19, 2012
 * @version $Revision$
 */
public class JdbcCloser {


  public static void close(Connection cn, CallableStatement cstmt) {
    try {
      if (cstmt != null) {
        cstmt.close();
      }
      if (cn != null) {
        cn.close();
      }
    }
    catch (SQLException ex) {
      System.out.println("Exception closing connection: " +  ex);
    }
  }
}
