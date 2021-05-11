<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Pre-Inflection Point Memegraphs</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">

<div id="title"><B>Pre-inflection Point Memegraphs</B>
<HR WIDTH=90% SIZE=3 ALIGN="left">
</div>
<p>Pre-inflection curves have an accelerating rate of growth according to <a href="<%= cPath %>/miner/index.jsp">MemeMiner</a><br />
They tend to be good investment candidates for your time, effort and money.</p>

<div id="columntext">
<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/investment/watershortageDejanews.png');">Water</a> as an investment idea.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/creativecommonscontentDejanews.png');"> Creative Commons </a> code is used in this website.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/technology/LAMPlinuxDejanews.png');"> Is LAMP </a> a J2EE killer?</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/vonageDejanews.png');"> Vonage </a> is a high recognition VOIP provider.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/wimaxDejanews.png');"> WiMax </a> is a new long-range wireless standard.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/wifiphoneDejanews.png');"> Wifi Phone </a>: Cell phone use through standard Wifi networks.</div>

<div id="graph">The Apple<a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/ipodDejanews.png');"> iPod </a>. Enough said.</div>

<div id="graph">Walmart is a strong proponent of <a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/rfid tagDejanews.png');"> RFID tags </a>.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/rss rdfDejanews.png');"> RSS newsfeeds </a> are highly correlated to blogs.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/blogDejanews.png');"> Blogs </a> make the mainstream news in 2004.</div>

<div id="graph">Emergence of <a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/mythTVDejanews.png');"> Myth TV </a> convergence.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/preinflection/linuxfirmwareDejanews.png');"> Linux consumer devices </a>.</div>

<p><a href="<%= cPath %>/miner/java.jsp?startup=<%= cPath %>/miner/java/eclipseDejanews.png">Next graphs</a></p>
</div>

<div id="columnimage"><img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);" /> (click image for larger view)</div>
</div>
</BODY>
</HTML>
