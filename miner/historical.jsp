<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Historical MemeGraphs</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
	<div id="title">
		<B>Through A Glass, Darkly</B>
		<HR WIDTH=90% SIZE=3 ALIGN="left">
		</div>
		<p>Viewed in retrospect, these graphs provide empirical support for the <a href="<%= cPath %>/miner/index.jsp">MemeMiner methodology.</a></p>

		<div id="columntext">
		<div id="graph">
		Rumors of shortage precede the rise in <a href="#" onclick="showWindow('<%= cPath %>/miner/investment/palladiumDejanews.png');">Palladium's</a> price.
		</div>

		<div id="graph">
		<a href="#" onclick="showWindow('<%= cPath %>/miner/investment/interestratebondDejanews.png');">Interest rate meme </a>and 30-year mortgage bottom in tandem.
		</div>

		<div id="graph">
		The <a href="#" onclick="showWindow('<%= cPath %>/miner/popculture/easterbunnyDejanews.png');">Easter Bunny</a> comes once per year. 
		</div>

		<div id="graph">
		Dejanews scoops mainstream news on <a href="#" onclick="showWindow('<%= cPath %>/miner/technology/flashmobDejaNews.png');">Flashmobs</a>.
		</div>

		<div id="graph">
		The <a href="#" onclick="showWindow('<%= cPath %>/miner/other/workDejanews.png');">heartbeat</a> of America.  Wednesday really is hump day.
		</div>

		<div id="graph">
		The rise and fall of <a href="#" onclick="showWindow('<%= cPath %>/miner/technology/delphi pascalDejanews.png');">Delphi</a> the programming language.
		</div>

		<div id="graph">
		The rise and fall of <a href="#" onclick="showWindow('<%= cPath %>/miner/technology/delphiDejanews.png');">Delphi</a> in the misc.jobs.* newsgroups.
		</div>
	
		<p><a href="<%= cPath %>/miner/preinflection.jsp?startup=<%= cPath %>/miner/technology/LAMPlinuxDejanews.png">Next graphs</a></p>
	</div>
			
	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>
</div>

</div>
</BODY>
</HTML>
