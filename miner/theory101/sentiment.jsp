<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Meme Theory 101</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
	<div id="title">
			<a href="<%= cPath %>/theory101/index.jsp">Foundation</a>&nbsp;&nbsp;&nbsp;&nbsp;		
			<a href="<%= cPath %>/theory101/impedance.jsp">Impedance</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<B><a href="<%= cPath %>/theory101/sentiment.jsp">Sentiment</a></B>&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="<%= cPath %>/theory101/diffraction.jsp">Diffraction</a>
		<HR WIDTH=90% SIZE=3 ALIGN="left">
	</div>
	<br/>
	
	<div id="columntext">
		You're already seen a <a href="<%= cPath %>/evilindex/index.jsp">simple model of sentiment</a>.
		
		A complex model shows up here eventually.....
	</div>
	
	<div id="fulltext">
		Prototype semantic hierarchy for modelling sentiment, using an axis of "identity" vs "intensity".
		<br/>
		<br/>
		<img src="<%= cPath %>/theory101/hierarchy.png">
	</div>
</div>

</BODY>
</HTML>
