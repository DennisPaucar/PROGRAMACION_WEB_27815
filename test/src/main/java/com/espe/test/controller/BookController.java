package com.espe.test.controller;

import com.espe.test.dao.BookDAO;
import com.espe.test.model.Book;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/books")

public class BookController extends HttpServlet {
    private final BookDAO bookDAO = new BookDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)throws ServletException, IOException{
        String action = req.getParameter("action");
        if(action == null || action.isEmpty()) action = "list";

        switch (action){
           case "new" -> showForm(req,resp, new Book(), "create");
           case "edit" -> showEdit(req, resp);
           case "delete" -> doDeleteById(req,resp);
           default -> doList(req,resp);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        String action = req.getParameter("action");
        if(action == null) action = "";

        switch (action){
            case "create" -> doCreate(req,resp);
            case "update" -> doUpdate(req,resp);
            default -> resp.sendRedirect(req.getContextPath() + "/books");
        }
    }

    private void doList(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Book> books = bookDAO.findAll();
        req.setAttribute("books", books);
        req.getRequestDispatcher("/WEB-INF/book-list.jsp").forward(req,resp);

    }

    private void showEdit(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        Long id = Long.parseLong(req.getParameter("id"));

        Book book = bookDAO.findById(id);
        if (book == null) {
            resp.sendRedirect(req.getContextPath() + "/books");
            return;
        }

        showForm(req, resp, book, "update");


    }

    private void showForm(HttpServletRequest req, HttpServletResponse resp, Book book, String action) throws ServletException, IOException{
        req.setAttribute("book", book);
        req.setAttribute("formAction", action);
        req.getRequestDispatcher("/WEB-INF/book-form.jsp").forward(req,resp);
    }

    private void doCreate(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        Book book = parseBook(req,false);
        bookDAO.create(book);
        resp.sendRedirect(req.getContextPath() + "/books");
    }

    private void doUpdate(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        Book book = parseBook(req,true);
        bookDAO.update(book);
        resp.sendRedirect(req.getContextPath() + "/books");
    }

    private void doDeleteById(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        Long id = Long.parseLong(req.getParameter("id"));
        bookDAO.delete(id);
        resp.sendRedirect(req.getContextPath() + "/books");
    }

    private Book parseBook(HttpServletRequest req, boolean withId)throws ServletException{
        try{
            String title = req.getParameter("title");
            String author = req.getParameter("author");
            BigDecimal price = new BigDecimal(req.getParameter("price"));

            if(title == null || title.isBlank()){
                throw new ServletException("Titulo requerido!");
            }
            if(author == null || author.isBlank()){
                throw new ServletException("Autor requerido!");
            }
            if(price.compareTo(BigDecimal.ZERO) <= 0){
                throw new ServletException("Precio requerido!");
            }

            Book book = new Book(null, title.trim(), author.trim(), price);
            if(withId){
                book.setId(Long.parseLong(req.getParameter("id")));
            }

            return book;
        }catch(NumberFormatException e){
            throw new ServletException("Datos invalidos", e);
        }
    }
}
