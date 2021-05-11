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
			<B>Latent Tendencies</B>
			<HR WIDTH=90% SIZE=3 ALIGN="left">
		</div>
		<p><a href="<%= cPath %>/miner/index.jsp">Mememiner methodology</a></p>
		
		<div id="columntext">

			<div id="graph">
				<p><a href="#" onclick="showWindow('<%= cPath %>/miner/latency/sarsvirusDejanews.png');">SARS virus</a> isn't immediately perceived as a threat.<br/>
				The meme peaks worldwide in 45 days.</p>
			</div><br/>

			<div id="graph">
				<a href="#" onclick="showWindow('<%= cPath %>/miner/latency/tsunamiDejanews.png');">Tsunami of 2004</a> travels faster, peaking in 13 days.
			</div>

			<div id="graph">
				<a href="#" onclick="showWindow('<%= cPath %>/miner/latency/popedeathDejanews.png');">The death of Pope John Paul</a> moves surprisingly fast in five days.
			</div><br/>

			<p><a href="<%= cPath %>/miner/java.jsp?startup=<%= cPath %>/miner/java/scriptinglanguagesDejanews.png">Next graphs</a></p>
		</div>

	<div id="columnimage">
		<img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);"/>
		(click image for larger view)
	</div>
</div>

</BODY>
</HTML>
