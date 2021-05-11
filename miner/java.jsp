<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Java MemeGraphs</TITLE>

<c:import url="/meta.jsp" />

</HEAD>
<BODY>

<c:import url="/navigation.jsp" />

<div id="content">
<div id="title"><B>Right once, run anywhere?</B>
<HR WIDTH=90% SIZE=3 ALIGN="left">
</div>
<p>Java-related technology trends using <a href="<%= cPath %>/miner/index.jsp">MemeMiner methodology</a>
<p>

<div id="columntext">
<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/java/java_j2eeDejanews.png');">J2EE</a> matures past its inflection point.</div>

<div id="graph">The <a href="#" onclick="showWindow('<%= cPath %>/miner/java/AppServersDejanews.png');">J2EE Appserver</a> race is still on.</div>

<div id="graph">Rise of the <a href="#" onclick="showWindow('<%= cPath %>/miner/java/scriptinglanguagesDejanews.png');">scripting languages (PHP, Perl, Python, Ruby)?</a><br />
Only Python shows a pre-inflection rate of growth.</div>
<br />

<div id="graph">Is <a href="#" onclick="showWindow('<%= cPath %>/miner/java/clientsidejavaDejanews.png');">client-side java</a> re-emerging? Doubtful.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/java/ejbDejanews.png');">EJB</a> heads for the museum.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/java/hibernatejavaDejanews.png');">Hibernate</a> heads for outer space.</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/java/eclipseintellijDejanews.png');">Eclipse versus Intellij</a> - which one to choose?</div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/java/eclipsevsnetbeansDejanews.png');">Eclipse vs. Netbeans</a></div>

<div id="graph"><a href="#" onclick="showWindow('<%= cPath %>/miner/java/netbeansDejanews.png');">Netbeans</a> vs. <a href="#" onclick="showWindow('<%= cPath %>/miner/java/jbuilderDejanews.png');">Borland JBuilder</a> vs. <a href="#" onclick="showWindow('<%= cPath %>/miner/java/jdeveloperDejanews.png');">Oracle JDeveloper</a> vs. <a href="#" onclick="showWindow('<%= cPath %>/miner/java/intellijDejanews.png');">Intellij.</a></div>

<p><a href="<%= cPath %>/miner/stock.jsp?startup=<%= cPath %>/miner/investment/SEBLDejanews.png">Next graphs</a></p>

</div>

<div id="columnimage"><img id="memegraph" src="<%= request.getParameter("startup") %>" width="400" height="300" onclick="showWindow(this.src);" /> (click image for larger view)</div>
</div>

</BODY>
</HTML>
