<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Religion MemeGraphs</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
	<div id="title">
		<B>Pop Goes The Culture</B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
	</div>
	<p></p>

	<div id="columntext">
		<div id="graph">
		<a href="#" onclick="showWindow('<%= cPath %>/miner/popculture/spicegirlsvsmadonnaDejanews.png');"
		>Spice Girls</a> look like a standard marketing curve.
		</div>
	</div>
			
	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>
</div>

</div>
</BODY>
</HTML>