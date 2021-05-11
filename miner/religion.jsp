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
		<B>Opiate Of the Masses</B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
	</div>
	<p>Tracking the <a href="http://www.isil.org/peace/reviews/clash-of-civilizations.html">"Global Resurgence of Religion"</a> with <a href="<%= cPath %>/miner/index.jsp">MemeMiner.</a></p>

	<div id="columntext">
		<div id="graph">
		Decline of <a href="http://deseretnews.com/dn/view/0,1249,595072079,00.html">Utah economy</a> related to decline of <a href="#" onclick="showWindow('<%= cPath %>/miner/religion/mormonreligionDejanews.png');">Mormon church?</a>
		</div>

		<div id="graph">
		<a href="#" onclick="showWindow('<%= cPath %>/miner/religion/anarchocapitalismDejanews.png');">Anarchocapitalism:</a> Trust me, it <b>is</b> a religion. 
		</div>

		<p><a href="<%= cPath %>/miner/stock.jsp?startup=<%= cPath %>/miner/investment/AMZNDejanews.png">Next graphs</a></p>
	</div>
			
	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>
</div>

</div>
</BODY>
</HTML>
