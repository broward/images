<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Political MemeGraphs</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
			<div id="title">
			<B>Information is the currency of democracy</B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
			</div>
			<p>Donkey herding with <a href="<%= cPath %>/miner/index.jsp">MemeMiner</a></p>
			<p>The 2004 Presidential candidates</p>
		
			<div id="columntext">
			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/politics/johnkerryDejanews.png');">John Kerry</a> lags until Iowa.
			</div>

			<div id="graph">
			Vice-presidential nomination is the high point for <a href="#" onclick="showWindow('<%= cPath %>/miner/politics/johnedwardsDejanews.png');">John Edwards</a>.
			</div>
			
			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/politics/howarddeanDejanews.png');">Howard Dean</a>: Rising support into Iowa caucus.
			</div>

			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/politics/denniskucinichDejanews.png');">Dennis Kucinich</a> gets a bounce from Democratic Convention.
			</div>
			
			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/politics/wesclarkDejanews.png');">Wes Clark</a> has an unusual spike of interest before Iowa.
			</div>

			<div id="graph">
			Interest in <a href="#" onclick="showWindow('<%= cPath %>/miner/politics/richardgephardtDejanews.png');">Richard Gephardt</a> fades until the Convention.
			</div>
			
			<div id="graph">
			Rumors about <a href="#" onclick="showWindow('<%= cPath %>/miner/politics/hillaryclintonDejanews.png');">Hillary Clinton</a> precede key events.
			</div>
			<p/>
			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/politics/pnacdefenseDejanews.png');">PNAC</a> is created in 1997, but the meme doesn't appear until 2002.
			</div>

			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/politics/bothDejanews.png');">DemocraticUnderground.com vs. FreeRepublic.com</a> 
			</div>

			<div id="graph">
			<a href="#" onclick="showWindow('<%= cPath %>/miner/politics/airamericaradioDejanews.png');">Air America</a> sputters out.
			</div>

			<p><a href="<%= cPath %>/miner/republicans.jsp?startup=<%= cPath %>/miner/politics/federaldeficitDejanews.png">Next graphs</a></p>
			</div>

	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>
</div>
</BODY>
</HTML>
