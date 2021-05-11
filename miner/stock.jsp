<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Stock Price MemeGraphs</TITLE>

<jsp:include page="../meta.jsp"/>

</HEAD>
<BODY>

<jsp:include page="../navigation.jsp"/>

<div id="content">
			<div id="title">
			<B>Market Makers</B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
			</div>
			<p>Changes in <a href="<%= cPath %>/miner/index.jsp">meme patterns</a> often precede changes in stock price.<p>

			<div id="columntext">
			<div id="graph">
			Word of mouth precedes <a href="#" onclick="showWindow('<%= cPath %>/miner/investment/AMZNDejanews.png');" >Amazon's</a> stock rise.
			</div>

			<div id="graph">
			Hazy bull for <a href="#" onclick="showWindow('<%= cPath %>/miner/investment/AMATDejanews.png');" >Applied Materials</a> and strong crash correlation.
			</div>

			<div id="graph">
			Meme leads <a href="#" onclick="showWindow('<%= cPath %>/miner/investment/CSCODejanews.png');" >Cisco</a> up.
			</div>

			<div id="graph">
			Memegraph predicts the continued rise in <a href="#" onclick="showWindow('<%= cPath %>/miner/investment/EBAYDejanews.png');" >Ebay</a>.
			</div>

			<div id="graph">
			Sharp divergence as <a href="#" onclick="showWindow('<%= cPath %>/miner/investment/KKDDejanews.png');" >Krispy Kreme</a> collapses.
			</div>

			<div id="graph">
			Meme confirms that <a href="#" onclick="showWindow('<%= cPath %>/miner/investment/ORCLDejanews.png');" >Oracle</a> is the king of hype.
			</div>

			<div id="graph">
			Strong correlation for <a href="#" onclick="showWindow('<%= cPath %>/miner/investment/SEBLDejanews.png');" >Siebel</a> (perhaps the unique name?)
			</div>

			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/investment/YHOODejanews.png');" >Yahoo</a> has an interesting hyperbolic, lagging indicator.
			</div>

	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>
</div>
</BODY>
</HTML>
