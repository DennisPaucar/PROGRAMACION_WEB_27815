<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Book - Form</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container { 
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            padding: 40px;
            width: 100%;
            max-width: 500px;
        }
        h1 { 
            color: #333;
            margin-bottom: 30px;
            font-size: 26px;
        }
        .field { 
            margin-bottom: 20px;
        }
        label { 
            display: block;
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
        }
        input, input[type="number"] { 
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            font-size: 16px;
            transition: all 0.3s ease;
            font-family: inherit;
        }
        input:focus, input[type="number"]:focus { 
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        .field span { 
            display: block;
            padding: 12px 15px;
            background: #f5f5f5;
            border-radius: 6px;
            color: #666;
        }
        .actions { 
            display: flex;
            gap: 10px;
            margin-top: 30px;
        }
        button, .btn { 
            flex: 1;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            text-align: center;
            display: inline-block;
        }
        button { 
            background: #667eea;
            color: white;
        }
        button:hover { 
            background: #764ba2;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        .btn { 
            background: #e0e0e0;
            color: #333;
        }
        .btn:hover { 
            background: #d0d0d0;
        }
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

<c:set var="isUpdate" value="${formAction == 'update'}"/>

<div class="container">
    <h1>
        <c:choose>
            <c:when test="${isUpdate}">✏️ Edit Book</c:when>
            <c:otherwise>📖 New Book</c:otherwise>
        </c:choose>
    </h1>

    <c:if test="${not empty error}">
        <div class="msg error"><c:out value="${error}"/></div>
    </c:if>

    <form id="bookForm" method="post" action="${pageContext.request.contextPath}/books">
        <input type="hidden" name="action" value="${formAction}"/>

        <c:if test="${isUpdate}">
            <input type="hidden" name="id" value="${book.id}"/>
            <div class="field">
                <label>ID:</label>
                <span><c:out value="${book.id}"/></span>
            </div>
        </c:if>

        <div class="field">
            <label>Title:</label>
            <input type="text" name="title" value="${book.title}" maxlength="120" required/>
        </div>

        <div class="field">
            <label>Author:</label>
            <input type="text" name="author" value="${book.author}" maxlength="120" required/>
        </div>

        <div class="field">
            <label>Price:</label>
            <input type="number" name="price" value="${book.price}" step="0.01" min="0" required/>
        </div>

        <div class="actions">
            <button type="submit">Save</button>
            <a href="${pageContext.request.contextPath}/books" class="btn">Cancel</a>
        </div>
    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
    document.getElementById('bookForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.querySelector('input[name="title"]').value.trim();
        const author = document.querySelector('input[name="author"]').value.trim();
        const price = document.querySelector('input[name="price"]').value;

        if (title === '') {
            Swal.fire({
                icon: 'error',
                title: 'Campo requerido',
                text: 'El título no puede estar vacío'
            });
            return;
        }

        if (author === '') {
            Swal.fire({
                icon: 'error',
                title: 'Campo requerido',
                text: 'El autor no puede estar vacío'
            });
            return;
        }

        if (price === '' || price <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Precio inválido',
                text: 'El precio debe ser mayor a 0'
            });
            return;
        }


        Swal.fire({
            icon: 'success',
            title: 'Formulario válido',
            text: 'Guardando información...',
            showConfirmButton: false,
            timer: 1200
        });

        setTimeout(() => {
            e.target.submit();
        }, 1200);
    });
</script>




</body>
</html>