<%-- 
    Document   : demoSession
    Created on : Jan 25, 2019, 9:25:51 PM
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
            
            Integer n = (Integer) session.getAttribute("count");
            if (n == null) {
                n = 0;
            }
            n++;
            session.setAttribute("count", n);

//            Cookie demoCc = new Cookie("demo", "vi du ve cookies");
//            demoCc.setMaxAge(24*60*60);
            //dưa cookie về client
//            response.addCookie(demoCc);
//             pageContext.setAttribute("", value);
//request.getCookies();
            application.setAttribute("demo", "day la vung nho to nhat");

//request.getServletContext().setAttribute(name, object);
//session.removeAttribute( );
%>
        Couter: ${sessionScope.count} <br />
        Cookie: ${cookie.demo.value} <br />
        Context: ${applicationScope.demo} <br />
        Name: ${param.name}
    </body>
</html>
