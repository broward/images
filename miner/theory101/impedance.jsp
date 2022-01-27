<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Meme Theory 101</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
	<div id="title">
		    <a href="<%= cPath %>/theory101/index.jsp">Foundation</a>&nbsp;&nbsp;&nbsp;&nbsp;		
		 <B><a href="<%= cPath %>/theory101/impedance.jsp">Impedance</a></B>&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="<%= cPath %>/theory101/sentiment.jsp">Sentiment</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="<%= cPath %>/theory101/diffraction.jsp">Diffraction</a>
		<HR WIDTH=90% SIZE=3 ALIGN="left">
	</div><br/>

	<div id="none">
		<b>Latency</b> and <b>magnitude</b> are components of cultural impedance.</br>
		<b>Latency</b> shows how quickly a meme is absorbed by a culture:</br>
		<br/>
	</div>

	<br/>

	<table width="100%">
	<tr><td>
		<p>Pope's death is quickly accepted....</p>
		<img id="memegraph" src="<%= cPath %>/theory101/popedeathDejanews.png" width="320" height="240" onclick="showWindow(this.src);" />
	</td>
		
	<td>
		<p>But SARS virus is resisted</p>
		<img id="memegraph" src="<%= cPath %>/theory101/sarsvirusDejanews.png" width="320" height="240" onclick="showWindow(this.src);" />
	</td></tr>
	</table>

	<br/>
	<br/>

	<div id="anchor2">
		Relative <b>magnitude</b> is another component of impedance.</br>
		A high magnitude implies quick absorption; a low magnitude shows poor absorption:
	</div>

	<br/>
	<br/>
	<br/>
	<br/>

	<table width="100%">
	<tr><td>
		<p>30,000 "blog" references is high (and still rising)....</p>
		<img id="memegraph" src="<%= cPath %>/theory101/blogDejanews.png" width="320" height="240" onclick="showWindow(this.src);" />
	</td>
		
	<td>
		<p>while <a href="http://www.newamericancentury.org/">PNAC</a> shows poor acceptance</p>
		<img id="memegraph" src="<%= cPath %>/theory101/pnacdefenseDejanews.png" width="320" height="240" onclick="showWindow(this.src);" />
	</td></tr>
	</table>

</div>

</BODY>
</HTML>
