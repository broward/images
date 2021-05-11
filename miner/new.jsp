<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Exploring the New World</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
	<div id="title">
		<B>Exploring the New World</B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
	</div>
	<p>Graphs extracted using <a href="<%= cPath %>/miner/index.jsp">MemeMiner methodology</a><p>

	<div id="columntext">
		<div id="graph">
			<p>A reader suggested this comparison of <a href="#" onclick="showWindow('<%= cPath %>/miner/technology/hibernatevsrubyDejanews.png');" >Hibernate to Ruby on Rails</a></p><br>
		</div>

		<div id="graph">
			<p>HttpXmlRequest as a proxy for <a href="#" onclick="showWindow('<%= cPath %>/miner/technology/ajaxDejanews.png');" >AJAX Application</a></p><br>
		</div>

		<div id="graph">
			<p><a href="#" onclick="showWindow('<%= cPath %>/miner/technology/SOAarchitectureDejanews.png');" >Service-oriented architecture</a> was released before its time.</p><br>
		</div>

		<div id="graph">
			<p><a href="#" onclick="showWindow('<%= cPath %>/miner/technology/peertopeerDejanews.png');" >Peer to Peer hype</a> dying out.<br>
			P2P systems have no immunity to <a href="<%= cPath %>/costs/example.jsp">constraint of transaction costs</a></p><br>
		</div>

		<div id="graph">
			<p>More <a href="#" onclick="showWindow('<%= cPath %>/miner/technology/p2ppeerDejanews.png');" >P2P validation</a></p><br>
		</div>
		
		<p><a href="<%= cPath %>/miner/historical.jsp?startup=<%= cPath %>/miner/investment/palladiumDejanews.png">Next graphs</a></p>
	</div>
			
	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>

</div>

</BODY>
</HTML>