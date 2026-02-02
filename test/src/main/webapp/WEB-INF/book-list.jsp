<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Books - List</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container { 
            max-width: 1000px; 
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            padding: 30px;
        }
        h1 { 
            color: #333; 
            margin-bottom: 25px;
            font-size: 28px;
        }
        .btn { 
            display: inline-block;
            padding: 10px 20px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .btn:hover { 
            background: #764ba2;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        table { 
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th { 
            background: #667eea;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
        }
        td { 
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
        }
        tr:hover { background: #f8f9ff; }
        .actions a { 
            margin-right: 10px;
            padding: 6px 12px;
            border-radius: 4px;
            text-decoration: none;
            font-size: 14px;
            transition: all 0.2s ease;
        }
        .actions .edit { background: #48bb78; color: white; }
        .actions .edit:hover { background: #38a169; }
        .actions .delete { background: #f56565; color: white; }
        .actions .delete:hover { background: #e53e3e; }
        .msg { 
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            border-left: 4px solid;
        }
        .msg.error { 
            background: #fff5f5;
            border-color: #fc8181;
            color: #c53030;
        }
        .empty { text-align: center; color: #999; padding: 40px; }


        @media (max-width: 768px) {
            .container { padding: 15px; }
            h1 { font-size: 22px; }
            table { font-size: 14px; }
            th, td { padding: 10px; }
            .actions a {
                display: block;
                margin: 5px 0;
            }
        }

    </style>
</head>
<body>
<div class="container">
    <h1>Books</h1>

    <c:if test="${not empty error}">
        <div class="msg error"><c:out value="${error}"/></div>
    </c:if>

    <a href="${pageContext.request.contextPath}/books?action=new" class="btn">+ New Book</a>

    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <c:choose>
            <c:when test="${empty books}">
                <tr>
                    <td colspan="5" class="empty">No records found.</td>
                </tr>
            </c:when>
            <c:otherwise>
                <c:forEach var="b" items="${books}">
                    <tr>
                        <td><c:out value="${b.id}"/></td>
                        <td><c:out value="${b.title}"/></td>
                        <td><c:out value="${b.author}"/></td>
                        <td>$<c:out value="${b.price}"/></td>
                        <td class="actions">
                            <a href="${pageContext.request.contextPath}/books?action=edit&id=${b.id}" class="edit">Edit</a>
                            <a href="#"
                               class="delete"
                               onclick="confirmDelete(${b.id}); return false;">
                                Delete
                            </a>

                        </td>
                    </tr>
                </c:forEach>
            </c:otherwise>
        </c:choose>
        </tbody>
    </table>
</div>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    function confirmDelete(id) {
        Swal.fire({
            title: '¿Desea eliminar el libro?',
            text: 'No se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e53e3e',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href =
                    '${pageContext.request.contextPath}/books?action=delete&id=' + id;
            }
        });
    }
</script>


</body>
</html>