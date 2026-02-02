package com.espe.test.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Db {
    private static String URL = "jdbc:mysql://localhost:3306/sisdb2025?useSSL=false&serverTimezone=UTC";
    private static String USER = "root";
    private static String PASSWORD = "dennis2025";

    public Db() {
    }

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    public static void closeConnection(Connection conn) {
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                throw new RuntimeException("Error al cerrar la conexión", e);
            }
        }
    }
}
