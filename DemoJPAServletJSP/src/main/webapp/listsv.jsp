<%-- 
    Document   : listsv
    Created on : Jan 22, 2019, 10:34:44 PM
    Author     : Admin
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <c:if test="${requestScope.list==null}">
            <c:redirect url="GetAllSinhVienServlet" />
        </c:if>
        <table>
            <tr>
                <th>Ma</th>
                <th>Ten</th>
                <th>Ngay Sinh</th>
                <th>Sua</th>
                <th>Xoa</th>
            </tr>
            <c:forEach items="${requestScope.list}" var="sv">
                <tr>
                    <td>${sv.ma}</td>
                    <td>${sv.ten}</td>
                    <td>${sv.ngaySinh}</td>
                    <td><a href="SinhVienForm.jsp?ma=${sv.ma}}">Sửa</a></td>
                    <td><a href="DeleteSinhVien?ma=${sv.ma}}">Sửa</a></td>
                </tr>
            </c:forEach>
        </table>
    </body>
</html>
