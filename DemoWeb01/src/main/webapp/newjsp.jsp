<%-- 
    Document   : newjsp
    Created on : Jan 21, 2019, 9:55:10 PM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <%

            Integer att = (Integer) request.getAttribute("aaa");
//            out.print(att);

        %>

        <br /> <b style="color: red">${requestScope.messEr}</b>
        <br /> a =  ${requestScope.aaa} <br />
        <form method="post" action="DemoServlet">
            <input type="text" name="soA" value="${param.soA}" /> <button type="submit" >Gui di</button>
        </form>
    </body>
</html>
