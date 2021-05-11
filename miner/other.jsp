<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Other MemeGraphs</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
			<div id="title">
			<B></B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
			</div>
			<p>Memegraphs for technology and current events using <a href="<%= cPath %>/miner/index.jsp">Mememiner methodology</a></p>
		
			<div id="columntext">
			<div id="graph">
			<p><a href="http://story.news.yahoo.com/news?tmpl=story&cid=74&e=1&u=/cmp/20050330/tc_cmp/159908031">Comdex cancellation</a> was predictable.<br/>
			Technical analysis of <a href="#" onclick="showWindow('<%= cPath %>/miner/technology/comdexvegasDejanews.png');">Comdex meme</a> shows clear downtrend since 2000.</p>
			</div><br/>

			<div id="graph">
			Is there a <a href="#" onclick="showWindow('<%= cPath %>/miner/other/RealEstateMortgageDejanews.png');">Real Estate</a> bubble?
			</div>

			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/other/toll road highwayDejanews.png');">Toll roads</a> are big news.
			</div>

			<div id="graph">
			What's happening in the <a href="#" onclick="showWindow('<%= cPath %>/miner/other/m2mmachineDejanews.png');">machine-2-machine</a> world?
			</div>

			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/other/tivoDejanews.png');">TiVO</a> is still alive and kicking.
			</div>

			<div id="graph">
			The <a href="#" onclick="showWindow('<%= cPath %>/miner/other/consumerDejanews.png');">consumer</a> has faltered since the DotCom bubble crashed.
			</div>

			<div id="graph">
			PDA market for <a href="#" onclick="showWindow('<%= cPath %>/miner/technology/palm handheldDejaNews.png');">Palm</a> and <a href="#" onclick="showWindow('technology/pocket pc handheldDejaNews.png');">Pocket PC</a> may be saturated.
			</div>

			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/technology/uwb ultraDejanews.png');">Ultrawide Band (UWB)</a> market fizzles out.
			</div>

			<div id="graph">
			Return of the <a href="#" onclick="showWindow('<%= cPath %>/miner/other/indiefilmDejanews.png');">Indie Film.</a>
			</div>

			<div id="graph">
			Return of <a href="#" onclick="showWindow('<%= cPath %>/miner/other/coldfusionDejanews.png');">Cold Fusion?</a>
			</div>
			</div>

	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>
</div>

</BODY>
</HTML>
