<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Political MemeGraphs</TITLE>
</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
			<div id="title">
			<B>Information is the currency of democracy</B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
			</div>
			<p>Elephant stampede by <a href="<%= cPath %>/miner/index.jsp">MemeMiner</a></p>
		
			<div id="columntext">
			<div id="graph">
			Growth of <a href="#" onclick="showWindow('<%= cPath %>/miner/politics/freerepublicDejanews.png');">Freerepublic.com</a> spikes up in 2004.
			</div>

			<div id="graph">
			Rising concern over the <a href="#" onclick="showWindow('<%= cPath %>/miner/politics/federaldeficitDejanews.png');">Federal Deficit.</a>
			</div>

			<div id="graph">
			Rising concern over the <a href="#" onclick="showWindow('<%= cPath %>/miner/politics/currenttradedeficitDejanews.png');">Trade Deficit.</a>
			</div>

			<p><a href="<%= cPath %>/miner/religion.jsp?startup=<%= cPath %>/miner/gartner.png">Next graphs</a></p>	
			</div>

	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>
</div>
</BODY>
</HTML>
